import './sideBar.css';
import img from './profile_img.jpg';

const SideBar = () => {
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
          <li className='sidebarListItem'>Life</li>
          <li className='sidebarListItem'>Music</li>
          <li className='sidebarListItem'>Style</li>
          <li className='sidebarListItem'>Sport</li>
          <li className='sidebarListItem'>Cinema</li>
          <li className='sidebarListItem'>Tech</li>
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
