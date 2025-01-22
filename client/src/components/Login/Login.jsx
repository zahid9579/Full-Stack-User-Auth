import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import { loginUser } from '../../../api';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
   
    // Add your API call here to handle login
    try{
        const data = await loginUser(formData);
        console.log('Login Successfully', data);


    }catch(error){
        console.log(error);

    }
  };
  

  return (
    <div className="login">
      <h3>Login Form</h3>

      <form className="form" onSubmit={handleSubmit}>

        <label>Email:</label>
        <input className="input" type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
        <br />

        <label>Password:</label>
        <input className="input" type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required />
        <br />

        <button type="submit">Login</button>
        <p> Don't have an account?{' '} <Link to="/register">Register now</Link> </p>

      </form>
    </div>
  );
};

export default Login;
