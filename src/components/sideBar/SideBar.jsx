import './sideBar.css';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
const dotenv = require('dotenv');

const SideBar = () => {
  const apiUrl = process.env.REACT_APP_API_URL;

  const { user } = useContext(Context);
  console.log(user.desc);
  const PF = 'http://localhost:3000/images/';
  console.log(user);
  const [cat, setCat] = useState([]);
  useEffect(() => {
    const fetchCat = async () => {
      const res = await axios.get(`${apiUrl}/api/category`);
      setCat(res.data);
    };
    fetchCat();
  }, []);

  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img src={PF + user.profilePic} className='sidebarImg' height='250px'  />
        <p className='sideBarpara'>{user.desc}</p>
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
