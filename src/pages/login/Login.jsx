import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login'>
      <form className='loginForm'>
        <span className='loginTitle'>Login</span>
        <label>Email</label>
        <input type='text' placeholder='Enter your email...' className='loginInput' />
        <label>Password</label>
        <input type='password' placeholder='Enter your password...' className='loginInput' />
        <button type='submit' className='loginButton'>
          Login
        </button>
      </form>
      <button className='loginRegisterButton'>
        <Link to='/register' className='link2'>
          Register
        </Link>
      </button>
    </div>
  );
};

export default Login;
