import React, { useState } from 'react';
import './Register.css';
import { registerUser } from '../../../api';

const Register = () => {
  const [formData, setFormData] = useState({
    f_name: '',
    l_name: '',
    dob: '',
    email: '',
    password: '',
    mobile_no: '',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // Get the field name and value
    setFormData({ ...formData, [name]: value }); // Update the specific field
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Form Data:', formData); // Check if form data is correct

    try {
      const data = await registerUser(formData);
      console.log('Registration Successful', data);

      // Clear the form fields after successful registration
      setFormData({
        f_name: '',
        l_name: '',
        dob: '',
        email: '',
        password: '',
        mobile_no: '',
        gender: ''
      });

    } catch (error) {
      console.log('Registration Failed', error);
    }
  };

  return (
    <div className="registration">
      <h3>Registration Form</h3>
      <form className="form" onSubmit={handleSubmit}>

        <label>First Name:</label>
        <input className="input" type="text" name="f_name" placeholder="Enter your first name" value={formData.f_name} onChange={handleChange} required/>
        <br />

        <label>Last Name:</label>
        <input className="input" type="text" name="l_name" placeholder="Enter your last name" value={formData.l_name} onChange={handleChange} required/>
        <br />

        <label>DOB:</label>
        <input className="input" type="date" name="dob" value={formData.dob} onChange={handleChange} required/>
        <br />

        <label>Email:</label>
        <input className="input" type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required/>
        <br />

        <label>Password:</label>
        <input className="input" type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required/>
        <br />

        <label>Mobile No:</label>
        <input className="input" type="tel" name="mobile_no" placeholder="Enter your mobile number" value={formData.mobile_no} onChange={handleChange} required/>
        <br />

        <label>Gender:</label>
        <select className="input" name="gender" value={formData.gender} onChange={handleChange} required >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />

        <button type="submit">Register Now</button>
      </form>
    </div>
  );
};

export default Register;
