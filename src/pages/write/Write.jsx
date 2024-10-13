import { useContext, useState } from 'react';
import './write.css';
import axios from 'axios';
import { Context } from '../../context/Context';
import { v4 as uuidv4 } from 'uuid';

const Write = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState('');
  const { user } = useContext(Context);

  const handleSubmit = async e => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const fileName = uuidv4() + file.name;
      data.append('name', fileName);
      data.append('file', file);
      newPost.photo = fileName;
      try {
        await axios.post('http://localhost:3000/api/upload', data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.post('http://localhost:3000/api/post', newPost);
      window.location.replace('/post/' + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='write'>
      {file && <img src={URL.createObjectURL(file)} className='writeImg' alt='' />}
      <form className='writeForm' onSubmit={handleSubmit}>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon fa-solid fa-plus'></i>
          </label>
          <input
            type='file'
            id='fileInput'
            className='inputText'
            onChange={e => {
              setFile(e.target.files[0]);
            }}
          />
          <input type='text' placeholder='Title' className='writeInput' autoFocus={true} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className='writeFormGroup'>
          <textarea placeholder='Tell your story...' type='text' className='writeInput writeText' cols={10} onChange={e => setDesc(e.target.value)}></textarea>
        </div>

        <button className='writeSubmit' type='submit'>
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
