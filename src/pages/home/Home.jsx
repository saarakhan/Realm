import Header from '../../components/Header/Header';
import Posts from '../../components/posts/Posts';
import SideBar from '../../components/sideBar/SideBar';
import './home.css';

const Home = () => {
  return (
    <div>
      <Header />
      <div className='home'>
        <Posts />
        <SideBar />
      </div>
    </div>
  );
};

export default Home;
