import { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = () => {
    setFormData({
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    });
  };

  const handleSignup = async () => {
    const response = await fetch('http://localhost:5000/api/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    console.log(result.message);
  };

  return (
    <div>
      <h2>Signup</h2>
      <div>
        <label htmlFor="username">Username</label><br/>
        <input type="text" name="username" id="username" onChange={handleChange} /><br/>
        <label htmlFor="email">Email</label><br/>
        <input type="email" name="email" id="email" onChange={handleChange} /><br/>
        <label htmlFor="password">Password</label><br/>
        <input type="password" name="password" id="password" onChange={handleChange} /><br/>
        <button onClick={handleSignup}>Signup</button>
      </div>
    </div>
  );
}

export default Signup;


