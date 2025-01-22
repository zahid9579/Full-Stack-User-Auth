const express = require('express');
const {User}  = require('../model/UserModel.js');


const registerUser = (async (req, res) => {
  try {
      const { f_name, l_name, dob, email, password, mobile_no, gender } = req.body;
      
      // Check if all fields are provided
      if (!f_name || !l_name || !dob || !email || !password || !mobile_no || !gender) {
          return res.status(400).json({ error: 'All fields are required' });
      }
      
      // Check for existing email
      const existingUser = await User.findOne({ email });
      if (existingUser) {
          return res.status(400).json({ error: 'Email already registered' });
      }

      // Create a new user
      const newUser = new User({
          f_name,
          l_name,
          dob,
          email,
          password,
          mobile_no,
          gender
      });

      await newUser.save();
      res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
  }
});



// For Login wuth email and password
const loginUser = async(req, res) => {
    try{
        const {email, password} = req.body;

        // Checking for required for login
        if(!email || !password){
            return res.status(400).json({msg: "Email and password are required..."})

        }

        const user = await User.findOne({email});
        
        if(!user){
            return res.status(404).json({msg: "User not found..."})
        }

        res.status(200).json({msg: "Login successully", user})
        
    }catch(err){
        console.log(err)
        res.status(404).json({err: "some thing went wrong!"})
    }
}


module.exports = {registerUser, loginUser};
