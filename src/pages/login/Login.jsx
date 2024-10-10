import { useContext, useRef, useState } from 'react';
import PasswordShow from '../PasswordShow';
import './login.css';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import axios from 'axios';

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('http://localhost:3000/api/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
      window.location.replace('/');
    } catch (err) {
      console.error("Error response:", err.response?.data);
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };
  return (
    <div className='login'>
      <form className='loginForm' onSubmit={handleSubmit}>
        <span className='loginTitle'>Login</span>

        <label>Username</label>
        <div className='input-container'>
          <input type='text' placeholder='Enter your Username...' className='loginInput' ref={userRef} />
        </div>

        <label>Password</label>
        <div className='input-container'>
          <input type='password' placeholder='Enter your password...' className='registerInput' ref={passwordRef} />
        </div>

        <button className='loginButton' type='submit' disabled={isFetching}>
          {isFetching ? 'loading..' : 'Login'}
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
