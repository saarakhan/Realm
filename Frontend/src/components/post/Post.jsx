import './post.css';
import { Link } from 'react-router-dom';
const Post = ({ post }) => {
  const PF = `${window.location.origin}/images/`;
  return (
    <>
      <div className='post'>
        {post.photo && <img className='postImg' src={PF + post.photo} alt='' />}
        <div className='postInfo'>
          <div className='postCats'>
            {post.categories.map(cat => {
              return <span className='post Cat'>{cat}</span>;
            })}
          </div>
          <Link to={`/post/${post._id}`} className='link'>
            <span className='postTitle'>{post.title}</span>
          </Link>
          <hr />
          <div className='postDate'>{new Date(post.createdAt).toDateString()}</div>
        </div>
        <p className='postDesc'>{post.desc}</p>
      </div>
    </>
  );
};

export default Post;
