import Post from '../post/Post.jsx';
import './Posts.css';

const Posts = ({ post }) => {
  return (
    <div className='postsContainer'>
      {post.map(p => {
        return <Post  key={p._id} post={p}/>;
      })}
    </div>
  );
};

export default Posts;
