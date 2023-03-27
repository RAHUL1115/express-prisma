const express = require('express');
const { login, register, forgot } = require('./controller')

const auth = express.Router();

auth.post('/login', login)
auth.post('/register', register)
auth.post('/forgot', forgot)

module.exports = auth;