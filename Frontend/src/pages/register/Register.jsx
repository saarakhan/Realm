import { useState } from 'react';
import './register.css';
import { Link } from 'react-router-dom';
import PasswordShow from '../PasswordShow';
import axios from 'axios';
import LoadingDots from '../LoadingDots';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Register = () => {
  // const apiUrl = process.env.REACT_APP_API_URL;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');

  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [error, setError] = useState(false);

  const handleUsernameChange = value => {
    setUsername(value);
    setIsUsernameValid(value.length > 0);
  };

  const handleEmailChange = value => {
    setEmail(value);
    setIsEmailValid(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value));
  };

  const handlePasswordChange = value => {
    setPassword(value);
    setIsPasswordValid(value.length >= 6);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await axios.post('http://localhost:3000/api/auth/register', {
        username,
        email,
        password,
      });
      res.data && window.location.replace('/login');
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='register'>
      <form className='registerForm' onSubmit={handleSubmit}>
        <span className='registerTitle'>Register</span>

        <label>Username</label>
        <div className='input-container'>
          <input type='text' placeholder='Enter your Username...' className='registerInput' onChange={e => handleUsernameChange(e.target.value)} />
          {isUsernameValid ? <FaCheckCircle className='valid' /> : <FaTimesCircle className='invalid' />}
        </div>

        <label>Email</label>
        <div className='input-container'>
          <input type='text' placeholder='Enter your email...' className='registerInput' onChange={e => handleEmailChange(e.target.value)} />
          {isEmailValid ? <FaCheckCircle className='valid' /> : <FaTimesCircle className='invalid' />}
        </div>

        <label>Password</label>
        <div className='input-container'>
          <PasswordShow onChange={handlePasswordChange} />
          {isPasswordValid ? <FaCheckCircle className='valid' /> : <FaTimesCircle className='invalid' />}
        </div>

        <button className='registerButton' type='submit' disabled={loading || !isUsernameValid || !isEmailValid || !isPasswordValid}>
          {loading ? <LoadingDots /> : 'Register'}
        </button>
      </form>

      <button className='registerLoginButton'>
        <Link to='/login' className='link2'>
          Login
        </Link>
      </button>
      {error && <span className='error'>Something went wrong TRY AGAIN!!</span>}
    </div>
  );
};

export default Register;
