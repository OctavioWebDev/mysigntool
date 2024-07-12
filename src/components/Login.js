import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('API URL:', process.env.REACT_APP_BACKEND_URL);

      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: email, pwd: password }), // Ensure the payload matches backend expectation
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.accessToken); // Assuming the token is returned in the response
        navigate('/profile'); // Navigate to the profile page
      } else {
        alert(data.message || 'An error occurred during login. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;



