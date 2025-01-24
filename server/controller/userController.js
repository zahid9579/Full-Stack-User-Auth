const express = require('express');
const {User}  = require('../model/UserModel.js');
const {jwtAuthMiddleware, generateToken} = require('./../jwt.js');
const { config } = require('dotenv');

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

      const response = await newUser.save();

      const payload = {
        id: response.id,
        f_name: response.f_name

      }

      const token = generateToken(payload)
      console.log("Token is :", token);


      res.status(201).json({ message: 'User registered successfully', response: response, token: token});
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

        // Generate token
        const payload ={
            id: user.id,
            f_name: user.f_name
        }
        const token = generateToken(payload)
        // Return token as response
        res.status(200).json({msg: "Login successully", token})
        
    }catch(err){
        console.log(err)
        res.status(404).json({err: "some thing went wrong!"})
    }
}

// Function to get all the user
const getAllUser = async(req, res) => {
    try{
        const data = await User.find();
        console.log("data fetched");
        res.status(200).json(data);

    }catch(err){
        console.log(err)
        res.status(404).json({error: "Internal server error"});
    }
  
};


module.exports = {registerUser, loginUser, getAllUser};

