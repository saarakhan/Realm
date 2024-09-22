import './header.css';
import img from './img.png';
const Header = () => {
  return (
    <div>
      <div className='header'>
        <div className='headerTitles'>
          <div className='headerTitle1'>Your Destination for Insights</div>
          <div className='headerTitle2'>Realm Blog</div>
        </div>
        <img className='headerImg' src={img} alt='' />
      </div>
    </div>
  );
};

export default Header;
