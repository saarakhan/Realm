import Header from '../../components/header/Header.jsx';
import Posts from '../../components/posts/Posts';
import SideBar from '../../components/sideBar/SideBar';
import './home.css';

const Home = () => {
  return (
    <div>
      <Header />
      <div className='home'>
        <div className='posts'>
          <Posts />
        </div>
        <div className='sidebar'>
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default Home;