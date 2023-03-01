const express = require("express");
const auth = require("./auth/authRoute");

const routes = express.Router();
routes.use('/auth',auth);

module.exports = routes;
