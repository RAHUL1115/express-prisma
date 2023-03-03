const express = require('express');
const {login,register,forgot} = require('../controllers/authController')

const auth = express.Router();

/**
 * @swagger
 * 
 * /v1/auth/login:
 *  post:
 *      produces: application/json
 *      responses:
 *          200:
 *              description: Returns a mysterious string
 */
auth.post('/login', login)
auth.post('/register', register)
auth.post('/forgot', forgot)

module.exports = auth;