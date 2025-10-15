import React, { useState, useContext } from 'react';
import './Login.css';
import Backbutton from '../components/Backbutton';
import { UserContext } from '../components/UserContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '{}');

    if (isRegistering) {
      if (users[username]) {
        setError('Username already exists');
      } else {
        users[username] = password;
        localStorage.setItem('users', JSON.stringify(users));
        alert('✅ Registration successful!');
        setIsRegistering(false);
      }
    } else {
      if (users[username] && users[username] === password) {
        login(username); // updates global context
        navigate('/Home');
      } else {
        setError('Invalid username or password');
      }
    }
  };

  return (
    <div className="login-page">
      <Backbutton />
      <div className="login-container">
        <h2>{isRegistering ? 'Register' : 'Login'}</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value.trim())}
            required
          />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="error">{error}</p>}

          <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>

          <p style={{ marginTop: '10px' }}>
            {isRegistering ? (
              <>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => setIsRegistering(false)}
                  className="link-button"
                >
                  Log in
                </button>
              </>
            ) : (
              <>
                New here?{' '}
                <button
                  type="button"
                  onClick={() => setIsRegistering(true)}
                  className="link-button"
                >
                  Create an account
                </button>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
}
