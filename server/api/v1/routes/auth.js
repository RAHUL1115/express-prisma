const express = require('express');
const jwt = require('../middlewares/jwt')
const { login, register, forgot } = require('../controllers/authController')

const auth = express.Router();

auth.post('/login', jwt.authenticateCookie, login)
auth.post('/register', jwt.authenticateCookie, register)
auth.post('/forgot', jwt.authenticateCookie, forgot)

module.exports = auth;