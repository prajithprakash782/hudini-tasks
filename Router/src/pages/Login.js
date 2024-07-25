
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
   
    if (username === 'pprajith' && password === 'prajith') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div style={{height:"100vh"}} className='d-flex justify-content-center align-items-center flex-column'>
      <h2>Login</h2>
      <input 
        className='mt-3'
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
      className='mt-3'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="mt-3" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
