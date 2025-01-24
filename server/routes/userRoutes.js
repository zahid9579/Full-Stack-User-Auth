const express = require('express');
const {registerUser, loginUser, getAllUser} = require('../controller/userController.js')
const {jwtAuthMiddleware} = require('./../jwt.js')

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/getAllUser',jwtAuthMiddleware, getAllUser);


module.exports = router;