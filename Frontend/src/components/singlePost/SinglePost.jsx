import { Link, useLocation } from 'react-router-dom';
import './singlePost.css';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';

const singlePost = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2]; //post id
  const [post, setPost] = useState([]);
  const PF = 'http://localhost:3000/images/';
  const { user } = useContext(Context);
  const [del, setDel] = useState(false);
  // update
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [updateMode, setUpdateMode] = useState(false);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('http://localhost:3000/api/post/' + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete('http://localhost:3000/api/post/' + path, { data: { username: user.username } });
      setDel(true);
      setTimeout(() => {
        window.location.replace('/');
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };
  const handleUpdate = async () => {
    try {
      await axios.put('http://localhost:3000/api/post' + path, { username: user.username, title, desc });
      setUpdate(true);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        {post.photo && <img src={PF + post.photo} alt='' className='singlePostImg' />}
        {updateMode ? (
          <input type='text' value={title} className='singlePostTitleInput' autoFocus onChange={e => setTitle(e.target.value)} />
        ) : (
          <h1 className='singlePostTitle'>
            {post.title}
            {post.username === user?.username && (
              <div className='singlePostEdit'>
                <i
                  className='singlePostIcon fa-regular fa-pen-to-square'
                  onClick={() => {
                    setUpdateMode(true);
                  }}></i>
                <i className='singlePostIcon fa-regular fa-trash-can' onClick={handleDelete}></i>
              </div>
            )}
          </h1>
        )}
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>
            Author :
            <Link to={`/?user=${post.username}`} className='link'>
              <b> {post.username} </b>
            </Link>
          </span>
          <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode ? <textarea type='text' value={desc} className='singlePostDescInput' onChange={e => setDesc(e.target.value)} /> : <p className='singlePostDesc'>{post.desc}</p>}
        {updateMode ? (
          <button className='updateBtn' onClick={handleUpdate}>
            Update
          </button>
        ) : (
          ''
        )}
      </div>
      {del && (
        <div className='modal'>
          <div className='modal-content'>
            <h3>Post deleted successfully ✅🗑️</h3>
          </div>
        </div>
      )}
      {update && (
        <div className='modal'>
          <div className='modal-content'>
            <h3>Post updated successfully ✅</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default singlePost;
