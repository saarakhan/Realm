import { useState, useContext } from 'react';
import PasswordShow from '../PasswordShow';
import './login.css';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import axios from 'axios';
const dotenv = require('dotenv');
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Login = () => {
  const apiUrl = process.env.REACT_APP_API_URL;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch, isFetching } = useContext(Context);

  const handleUsernameChange = value => {
    setUsername(value);
    setIsUsernameValid(value.length >= 4);
  };
  const handlePasswordChange = value => {
    setPassword(value);
    setIsPasswordValid(value.length >= 6);
  };
  const validate = () => {
    if (!username || !password) {
      return 'Username and password are required.';
    }
    if (password.length < 6) {
      return 'Password must be at least 6 characters long.';
    }
    return null;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post(`${apiUrl}/api/auth/login`, {
        username,
        password,
      });
      console.log(res);
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
      window.location.replace('/');
    } catch (err) {
      console.error('Error response:', err.response?.data);
      dispatch({ type: 'LOGIN_FAILURE' });
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className='login'>
      <form className='loginForm' onSubmit={handleSubmit}>
        <span className='loginTitle'>Login</span>

        {error && (
          <p className='errorMessage' style={{ margin: '10px', color: 'red' }}>
            {error}
          </p>
        )}

        <label>Username</label>
        <div className='input-container'>
          <input type='text' placeholder='Enter your Username...' className='registerInput' value={username} onChange={e => handleUsernameChange(e.target.value)} />
          {isUsernameValid ? <FaCheckCircle className='valid' /> : <FaTimesCircle className='invalid' />}
        </div>

        <label>Password</label>
        <div className='input-container'>
          <PasswordShow onChange={handlePasswordChange} />
          {isPasswordValid ? <FaCheckCircle className='valid' /> : <FaTimesCircle className='invalid' />}
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
