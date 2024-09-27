import './write.css';
const Write = () => {
  return (
    <div className='write'>
      <img src='https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=600' className='writeImg' alt='' />
      <form className='writeForm'>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon fa-solid fa-plus'></i>
          </label>
          <input type='file' id='fileInput' className='inputText' />
          <input type='text' placeholder='Title' className='writeInput' autoFocus={true} />
        </div>
        <div className='writeFormGroup'>
          <textarea placeholder='Tell your story...' type='text' className='writeInput writeText' cols={10}></textarea>
        </div>

        <button className='writeSubmit'>Publish</button>
      </form>
    </div>
  );
};

export default Write;
