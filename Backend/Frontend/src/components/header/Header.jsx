import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='headerTitles flex'>
        <div className='headerTitle1 animate-title'>Your Destination for Insights</div>
        <div className='headerTitle2 animate-title'>Realm Blog!</div>
      </div>
      <p className='flex animate-description'>Explore a wide range of captivating blogs through our intuitive platform. Join our community of avid readers today.</p>
    </div>
  );
};

export default Header;