import './setting.css';
import SideBar from '../../components/sideBar/SideBar';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/Context';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
const dotenv = require('dotenv');
const Setting = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [desc, setDesc] = useState('');
  const [update, setUpdate] = useState(false);
  const PF = `${apiUrl}/images/`;

  const handleOk = async e=>{
    setUpdate(false)
  }
  const handleSubmit = async e => {
    e.preventDefault();
    dispatch({ type: 'UPDATED_START' });
    const updateUser = {
      userId: user._id,
      username,
      email,
      password,
      desc,
    };

    if (file) {
      const data = new FormData();
      const fileName = uuidv4() + file.name;
      data.append('name', fileName);
      data.append('file', file);
      updateUser.profilePic = fileName;
      try {
        await axios.post(`${apiUrl}/api/upload`, data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      console.log(user);
      const res = await axios.put(`${apiUrl}/api/user` + user._id, updateUser);
      console.log(res.data);
      setUpdate(true);
      dispatch({ type: 'UPDATED_SUCCESS', payload: res.data });

     
    } catch (err) {
      dispatch({ type: 'UPDATED_FAILURE' });
      console.log(err);
    }
  };

  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <h2 className='settingHeader'>Account Settings</h2>
        <div className='settingTitle'>
          <span className='settingUpdateTitle'>Update Account</span>
          <span className='settingDeleteTitle'>Delete Account</span>
        </div>
        <form className='settingForm' onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className='settingProfilePic'>
            <img src={file ? URL.createObjectURL(file) : PF + user.profilePic} className='img' />
            <label htmlFor='fileInput'>
              <i className='settingPPIcon fa-regular fa-circle-user'></i>
            </label>
            <input type='file' id='fileInput' style={{ display: 'none' }} onChange={e => setFile(e.target.files[0])} />
          </div>

          <div className='settingInputContainer'>
            <label>Username</label>
            <input type='text' placeholder={user.username} onChange={e => setUsername(e.target.value)} />
          </div>

          <div className='settingInputContainer'>
            <label>Email</label>
            <input type='email' placeholder={user.email} onChange={e => setEmail(e.target.value)} />
          </div>

          <div className='settingInputContainer'>
            <label>Password</label>
            <input type='password' placeholder='Enter new password' onChange={e => setPassword(e.target.value)} />
          </div>
          <div className='settingInputContainer'>
            <label>Desc</label>
            <input type='text' placeholder='Tell me something about yourself' onChange={e => setDesc(e.target.value)} />
          </div>

          <button className='settingSubmit' type='submit'>
            Update
          </button>
        </form>

        {update && (
          <div className='modal'>
            <div className='modal-content'>
              <h3>User updated successfully ✅</h3>
              <button onClick={handleOk}>Ok</button>
            </div>
          </div>
        )}
      </div>
      <SideBar />
    </div>
  );
};

export default Setting;
