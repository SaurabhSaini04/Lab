import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = () => {
    setFormData({
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    });
  };

  const handleLogin = async () => {
    const response = await fetch('http://localhost:5000/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      navigate('/');
    } else {
      console.error('Login failed');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor="email">Email</label><br/>
        <input type="email" name="email" id="email" onChange={handleChange} /><br/>
        <label htmlFor="password">Password</label><br/>
        <input type="password" name="password" id="password" onChange={handleChange} /><br/>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;



