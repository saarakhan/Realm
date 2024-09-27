import './register.css';

const Register = () => {
  return (
    <div className='register'>
      <form className='registerForm'>
        <span className='registerTitle'>Register</span>
        <label>Username</label>
        <input type='text' placeholder='Enter your Username...' className='registerInput' />
        <label>Email</label>
        <input type='text' placeholder='Enter your email...' className='registerInput' />
        <label>Password</label>
        <input type='password' placeholder='Enter your password...' className='registerInput' />
        <button className='registerButton'>Register</button>
      </form>

      <button className='registerLoginButton'>Login</button>
    </div>
  );
};

export default Register;
