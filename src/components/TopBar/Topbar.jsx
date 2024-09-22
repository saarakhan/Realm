import './Topbar.css';

const Topbar = () => {
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
          <li className='ListItem'>HOME</li>
          <li className='ListItem'>ABOUT</li>
          <li className='ListItem'>CONTACT</li>
          <li className='ListItem'>WRITE</li>
          <li className='ListItem'>LOG-OUT</li>
        </ul>
      </div>
      <div className='Topright'>
        <img className='TopImg' src='https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
        <i className='TopSearchIcon fa-solid fa-magnifying-glass'></i>
      </div>
    </div>
  );
};

export default Topbar;
