const { loginValidation } = require('../validator');
const service = require('../service');

async function login(req, res, next) {
  try {
    let { error } = loginValidation.validate(req.body);
    if (error) throw error;

    res.status(200).json({ errors: "hello" });
  } catch (error) {
    next(error);
  }
}

function register(req, res, next) {

}

function logout(req, res, next) {

}

module.exports = {
  login,
  register,
  logout,
}