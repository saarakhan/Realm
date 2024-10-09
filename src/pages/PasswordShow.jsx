import React, { useState } from 'react';

const PasswordShow = ({ placeholder, onChange }) => {
  const [showPass, setShowPass] = useState(false);

  const handlePassword = () => {
    setShowPass(!showPass);
  };
  return (
    <div>
      <input
        type={showPass ? 'text' : 'password'}
        placeholder='Enter your password...'
        className='registerInput'
        onChange={e => {
          onChange(e.target.value);
        }}
      />
      <input type='checkbox' className='PasswordBtn' onClick={handlePassword} /> Show Password
    </div>
  );
};

export default PasswordShow;
