import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import './Topbar.css';
import { Context } from '../../context/Context';

const Topbar = () => {
  const { user, dispatch } = useContext(Context);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const PF = `${window.location.origin}/images/`;
  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    dispatch({ type: 'LOGOUT' });
    setShowLogoutModal(false);
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };
  return (
    <div className='top'>
      <div className='Topleft'>
        <i className='TopIcon fa-brands fa-square-facebook'></i>
        <i className='TopIcon fa-brands fa-square-twitter'></i>
        <i className='TopIcon fa-brands fa-square-pinterest'></i>
        <i className='TopIcon fa-brands fa-square-instagram'></i>
      </div>
      <div className={'Topcenter'}>
        <ul className='TopList'>
          <li className='ListItem '>
            <Link to='/' className='link'>
              HOME
            </Link>
          </li>
          <li className='ListItem'>
            <Link to='/post/:postId' className='link'>
              ABOUT
            </Link>
          </li>
          <li className='ListItem'>
            <Link to='/write' className='link'>
              WRITE
            </Link>
          </li>
          <li className='ListItem' onClick={handleLogout}>
            {user && 'LOGOUT'}
          </li>
          {showLogoutModal && (
            <div className='modal'>
              <div className='modal-content'>
                <h3>Do you really want to log out?</h3>
                <div>
                  <button onClick={confirmLogout}>Yes</button>
                  <button onClick={cancelLogout}>No</button>
                </div>
              </div>
            </div>
          )}
        </ul>
      </div>
      <div className='Topright'>
        {user ? (
          <Link to='/setting'>
            <img
              className='TopImg'
              src={
                user.profilePic && user.profilePic.trim() !== ''
                  ? PF + user.profilePic
                  : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8QATbxHgFvoPhdxKFIcSQragjLC6BcCo9FiU0koLh0FGzL3FocfsauUs53dAHfKCecaA&usqp=CAU'
              }
              alt={user.profilePic ? 'User Profile' : 'Default Avatar'}
            />
          </Link>
        ) : (
          <ul className='TopList'>
            <li className='ListItem'>
              <Link to='/login' className='link'>
                LOGIN
              </Link>
            </li>
            <li className='ListItem'>
              <Link to='/register' className='link'>
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Topbar;
