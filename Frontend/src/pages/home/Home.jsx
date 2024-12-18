import { useEffect, useState } from 'react';
import Header from '../../components/header/Header.jsx';
import Posts from '../../components/posts/Posts';
import SideBar from '../../components/sideBar/SideBar';
import './home.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [post, setPost] = useState([]);
  const { search } = useLocation(); // Location hook to get the search params

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`${window.location.origin}/api/post` + search);
      setPost(res.data);
    };
    fetchPost();
  }, [search]);
  return (
    <div>
      <Header />
      <div className='home'>
        <Posts post={post} />
      </div>
    </div>
  );
};

export default Home;
