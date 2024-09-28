import './post.css';

const Post = () => {
  return (
    <>
      <div className='post'>
        <img className='postImg' src='https://images.pexels.com/photos/2749481/pexels-photo-2749481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
        <div className='postInfo'>
          <div className='postCats'>
            <span className='postCat'>Music</span>
            <span className='postCat'>Life</span>
          </div>
          <span className='postTitle'>Lorem ipsum dolor sit amet</span>
          <hr />
          <div className='postDate'>1 hour algo</div>
        </div>
        <p className='postDesc'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam incidunt recusandae voluptatibus eveniet dolorem ratione unde sapiente nemo nesciunt ullam magni, illum corrupti qui. At
          nesciunt accusamus totam aperiam dolore? Repellat quidem facere corrupti, architecto sequi dolor. Veniam asperiores autem illo vel, dicta sunt non, ipsam ipsa necessitatibus consequuntur
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam incidunt recusandae voluptatibus eveniet dolorem ratione unde sapiente nemo nesciunt ullam magni, illum corrupti qui. At
          nesciunt accusamus totam aperiam dolore? Repellat quidem facere corrupti, architecto sequi dolor. Veniam asperiores autem illo vel, dicta sunt non, ipsam ipsa necessitatibus consequuntur
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam incidunt recusandae voluptatibus eveniet dolorem ratione unde sapiente nemo nesciunt ullam magni, illum corrupti qui. At
          nesciunt accusamus totam aperiam dolore? Repellat quidem facere corrupti, architecto sequi dolor. Veniam asperiores autem illo vel, dicta sunt non, ipsam ipsa necessitatibus consequuntur
        </p>
      </div>
    </>
  );
};

export default Post;
