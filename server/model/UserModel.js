const express = require('express');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    f_name: {
        type: String,
        required: true,
    },

    l_name: {
        type: String,
        required: true,
    },

    dob: {
        type: Date,
        required: true,
    },

    email: {
        type: String,
        unique: true,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    mobile_no: {
        type: String,
        validate: {
            validator: (v) => /^[9876]\d{9}$/.test(v), // Ensures the number starts with 9, 8, 7, or 6 and is 10 digits long.
            message: (props) => `${props.value} is not a valid mobile number!`,
        },
        required: true,
    },

    gender: {
        type: String,
        enum: ['male', 'female'], // Dropdown for gender selection.
        default: 'male', // Default value for gender.
    },
});

const User = mongoose.model('User', userSchema);

module.exports = {User};
