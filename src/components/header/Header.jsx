import './header.css';
const Header = () => {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <div className='headerTitle1'>Your Destination for Insights</div>
        <div className='headerTitle2'>Realm Blog</div>
      </div>
      <img className='headerImg' src='https://images.pexels.com/photos/28593908/pexels-photo-28593908/free-photo-of-peaceful-rural-road-at-sunrise-with-trees.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
    </div>
  );
};

export default Header;
