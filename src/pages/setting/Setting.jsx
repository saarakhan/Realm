import './setting.css';
import SideBar from '../../components/sideBar/SideBar';


const Setting = () => {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingTitle'>
          <span className='settingUpdateTitle'>Update Account</span>
          <span className='settingDeleteTitle'>Delete Account</span>
        </div>
        <form className='settingForm'>
          <label>Profile picture</label>

          <div className='settingProfilePic'>
            <img src='https://images.pexels.com/photos/2749481/pexels-photo-2749481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='img' />
            <label htmlFor='fileInput'>
              <i className='settingPPIcon fa-regular fa-circle-user'></i>
            </label>
            <input type='file' id='fileInput' style={{ display: 'none' }} />
          </div>
          <label>Username</label>
          <input type='text' placeholder='saara' />
          <label>Email</label>
          <input type='text' placeholder='abc@gmail.com' />
          <label>Password</label>
          <input type='password' placeholder='12345678' />
          <button className='settingSubmit'>Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
};

export default Setting;
