const createHttpError = require('http-errors')
const Prisma = require('../../../../../../prisma')
const UserInterface = require('../../../interface/user')

module.exports.loginService = async (data) => {
  let filter = {
    email: data.email,
    passwords: data.passwords
  }

  let user = await Prisma.$transaction(async (tx) => {
    let user = await UserInterface.get(tx,filter)
    if (user.length == 0) throw new createHttpError(401,"invalid id & password",{code:401})
    return user[0] 
  })

  return user;
}