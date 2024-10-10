import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import './Topbar.css';
import { Context } from '../../context/Context';

const Topbar = () => {
  const user = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='top'>
      <div className='Topleft'>
        <i className='TopIcon fa-brands fa-square-facebook'></i>
        <i className='TopIcon fa-brands fa-square-twitter'></i>
        <i className='TopIcon fa-brands fa-square-pinterest'></i>
        <i className='TopIcon fa-brands fa-square-instagram'></i>
      </div>
      <div className={`Topcenter ${isOpen ? 'open' : ''}`}>
        <ul className='TopList'>
          <li className='ListItem'>
            <Link to='/' className='link' onClick={() => setIsOpen(false)}>
              HOME
            </Link>
          </li>
          <li className='ListItem'>
            <Link to='/post/:postId' className='link' onClick={() => setIsOpen(false)}>
              ABOUT
            </Link>
          </li>
          <li className='ListItem'>
            <Link to='/contact' className='link' onClick={() => setIsOpen(false)}>
              CONTACT
            </Link>
          </li>
          <li className='ListItem'>
            <Link to='/write' className='link' onClick={() => setIsOpen(false)}>
              WRITE
            </Link>
          </li>
          <li className='ListItem'>
            <Link to='/logout' className='link' onClick={() => setIsOpen(false)}>
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
              <Link to='/register' className='link'>
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        {isMobile && (
          <div className={`TopHamburgerIcon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
