import './singlePost.css';

const singlePost = () => {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img src='https://images.pexels.com/photos/2749481/pexels-photo-2749481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' className='singlePostImg' />
        <h1 className='singlePostTitle'>
          Lorem ipsum, dolor sit amet
          <div className='singlePostEdit'>
            <i className='singlePostIcon fa-regular fa-pen-to-square'></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        
        <div className="singlePostInfo">
          <span className='singlePostAuthor'>Author : <b>Saara </b></span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>

        <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quo earum! Non corporis eaque facilis neque ea sequi labore voluptatum consectetur ipsum accusantium autem modi quibusdam dolorum, esse eos pariatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ea illo deleniti placeat delectus. Mollitia ipsam officia magnam, est dolor aperiam molestias, harum dolorum quam sit atque amet maxime dolore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quaerat molestiae nihil reprehenderit consectetur, molestias numquam, dolores ad mollitia rerum cupiditate? Accusantium magnam dolorem tempore ad minima commodi excepturi quidem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium libero reprehenderit, tenetur vero molestias nam, obcaecati laborum dolorum perspiciatis amet quae est ipsum, tempora non enim saepe esse sunt labore!Lorem</p>

      </div>
    </div>
  );
};

export default singlePost;
