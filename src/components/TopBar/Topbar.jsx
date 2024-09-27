import { Link } from 'react-router-dom';
import './Topbar.css';

const Topbar = () => {
  const user = false;
  return (
    <div className='top'>
      <div className='Topleft'>
        <i className='TopIcon fa-brands fa-square-facebook'></i>
        <i className='TopIcon fa-brands fa-square-twitter'></i>
        <i className='TopIcon fa-brands fa-square-pinterest'></i>
        <i className='TopIcon fa-brands fa-square-instagram'></i>
      </div>
      <div className='Topcenter'>
        <ul className='TopList'>
          <li className='ListItem'>
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
            <Link to='/contact' className='link'>
              CONTACT
            </Link>
          </li>
          <li className='ListItem'>
            <Link to='/write' className='link'>
              WRITE
            </Link>
          </li>
          <li className='ListItem'>
            <Link to='/l' className='link'>
              {user && 'LOGOUT'}
            </Link>
          </li>
        </ul>
      </div>
      <div className='Topright'>
        {user ? (
          <img className='TopImg' src='https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
        ) : (
          <ul className='TopList'>
            <li className='ListItem'>
              <Link to='/login' className='link'>
                LOGIN
              </Link>
            </li>
            <li className='ListItem'>
              {' '}
              <Link to='/register' className='link'>
                REGISTER
              </Link>
            </li>{' '}
          </ul>
        )}

        <i className='TopSearchIcon fa-solid fa-magnifying-glass'></i>
      </div>
    </div>
  );
};

export default Topbar;
