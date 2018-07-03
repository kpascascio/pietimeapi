const jwt = require('jsonwebtoken');
const sequelize = require('../db');
const User = sequelize.import('../models/user');

const validateSession = (req, res, next) => {
    const token = req.headers.authorization;
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (!err && decodedToken) {
            User.findOne({ where: { email: decodedToken.email } })
                .then(user => {
                    if (!user) { throw 'err' }
                    req.user = user;
                    return next()
                })
                .catch(err => next(err))
        } else {
            req.errors = err
            return next()
        }
    })
}

module.exports = validateSession;