const router = require('express').Router();
const User = require('../db').import('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const createToken = (user) => {
    return jwt.sign({ email: user.email }, 'secret', {expiresIn: 60*60*24})
}

router.post('/signup', (req, res) => {
    User.create({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    }).then(user => res.status(200).json({user, token: createToken(user)}))
        .catch(err => res.status(500).json(err))
})

router.post('/login', (req, res) => {
    User
        .findOne({ where: { email: req.body.email } })
        .then((user) => {
            if (user) {
                bcrypt.compare(req.body.password, user.password, (err, matches) => {
                    if (matches) { res.status(200).json({user, token: createToken(user)}) }
                    
                    else { res.status(401).json({ error: 'not Auth' }) }
                })
            } else {
                res.status(500).json({ error: 'not Auth' })
            }
        })
        .catch(err => res.status(500).json(err))
})

module.exports = router;