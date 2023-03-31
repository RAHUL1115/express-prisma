let joi = require('joi');

let loginValidation = joi.object().keys({
    'email': joi.string().required().email(),
    'password': joi.string().required().min(2),
});

module.exports = {
    loginValidation
}