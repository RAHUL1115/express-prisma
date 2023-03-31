const express = require('express');
const { login, register, logout } = require('./controller')

const auth = express.Router();

auth.post('/login', login)
auth.post('/register', register)
auth.get('/logout', logout)

module.exports = auth;