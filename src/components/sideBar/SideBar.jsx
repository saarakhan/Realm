import './sideBar.css';
import img from '../../assets/profile_img.jpg';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [cat, setCat] = useState([]);
  useEffect(() => {
    const fetchCat = async () => {
      const res = await axios.get('http://localhost:3000/api/category');
      setCat(res.data);
    };
    fetchCat();
  }, []);

  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img className='sidebarImg' src={img} height='250px' />
        <p className='sideBarpara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quidem officia ratione perferendis optio atque,</p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          {cat.map(c => (
            <Link to={`/?cat=${c.name}`} className='link'>
            <li key={c._id} className='sidebarListItem'>
              {c.name}
            </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>Follow Us</span>
        <div className='sidebarSocials'>
          <i className='SidebarIcon fa-brands fa-square-facebook'></i>
          <i className='SidebarIcon fa-brands fa-square-twitter'></i>
          <i className='SidebarIcon fa-brands fa-square-pinterest'></i>
          <i className='SidebarIcon fa-brands fa-square-instagram'></i>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
