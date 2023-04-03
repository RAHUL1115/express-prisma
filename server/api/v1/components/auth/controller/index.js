const { loginValidation } = require('../validator');
const Jwt = require('../../../middlewares/jwt');
const httpErrors = require('http-errors');
const service = require('../service');

async function login(req, res, next) {
  try {
    let { error } = loginValidation.validate(req.body);
    if (error) throw new httpErrors(400, error.message, { code: 400 });

    let data = {
      email: req.body.email,
      password: req.body.password
    };

    let serviceRes = await service.loginService(data);
    let jwt = new Jwt(serviceRes.jwt, serviceRes.firstName, serviceRes.lastName, serviceRes.role.roleName)
    let token = jwt.generateToken();

    res.cookie('authorization', token,{ httpOnly: true });
  
    res.status(200).json(serviceRes);
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