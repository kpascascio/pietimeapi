const User = require('../db').import('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserService {
    _createToken(user) {
        return jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 })
    }

    async userCreate(userObj) {
        const createdUser = await User.create({
            first_name: userObj.firstName,
            last_name: userObj.lastName,
            email: userObj.email,
            password: bcrypt.hashSync(userObj.password, 10)
        })
        const token = this._createToken(createdUser);

        return {
            createdUser,
            token
        };
    }

    async userLogin(userObj) {
        const loggedInUser = await User.findOne({ where: { email: userObj.email } })
        
        const isUser = await bcrypt.compare(userObj.password, loggedInUser.password)

        if(isUser){
            return {
                loggedInUser,
                error: false,
                token: this._createToken(loggedInUser)
            }
        } else {
            return {
                error: true,
                errorMsg: "not Auth"
            }
        }
    }
}

module.exports = UserService