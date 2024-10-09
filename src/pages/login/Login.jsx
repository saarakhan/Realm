import { useState } from 'react';
import PasswordShow from '../PasswordShow';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState();

  return (
    <div className='login'>
      <form className='loginForm'>
        <span className='loginTitle'>Login</span>
        <label>Email</label>
        <input
          type='text'
          placeholder='Enter your email...'
          className='loginInput'
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
        <PasswordShow placeholder='Enter your password...' onChange={setPassword} />
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
