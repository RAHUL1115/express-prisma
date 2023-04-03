require("dotenv").config()
const createHttpError = require("http-errors")
const jwt = require("jsonwebtoken")

class Jwt {
    constructor(jwtId, firstName, lastName, roleName) {
        this.jwtId = jwtId
        this.firstName = firstName
        this.lastName = lastName
        this.roleName = roleName
    }

    createPayload() {
        return {
            jwtId: this.jwtId,
            firstName: this.firstName,
            lastName: this.lastName,
            roleName: this.roleName,
        }
    }

    generateToken() {
        const token = jwt.sign(JSON.stringify(this), process.env.JWT_SECRET.toString())
        return token
    }

    static authenticateCookie(req, res, next) {
        let cookie = req.cookies

        if (!cookie) {
            throw new createHttpError(400,"Session cookie not found. Please login",{code:400})
        }

        try {
            let decode = jwt.verify(cookie['authorization'], process.env.JWT_SECRET)
            next()
        } catch (error) {
            throw Error("Session expired. Please login again")
        }
    }

}

module.exports = Jwt