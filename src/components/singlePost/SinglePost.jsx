import { Link, useLocation } from 'react-router-dom';
import './singlePost.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const singlePost = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2]; //post id
  const [post, setPost] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('http://localhost:3000/api/post/' + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        {post.photo && <img src={post.photo} alt='' className='singlePostImg' />}
        <h1 className='singlePostTitle'>
          {post.title}
          <div className='singlePostEdit'>
            <i className='singlePostIcon fa-regular fa-pen-to-square'></i>
            <i className='singlePostIcon fa-regular fa-trash-can'></i>
          </div>
        </h1>

        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>
            Author :
            <Link to={`/?user=${post.username}`} className='link'>
              <b>{post.username} </b>
            </Link>
          </span>
          <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
        </div>

        <p className='singlePostDesc'>{post.desc}</p>
      </div>
    </div>
  );
};

export default singlePost;
