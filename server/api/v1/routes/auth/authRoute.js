const express = require('express');
const {login,register,forgot} = require('./authController')

const auth = express.Router();
auth.post('/login', login)
auth.post('/register', register)
auth.post('/forgot', forgot)

module.exports = auth;