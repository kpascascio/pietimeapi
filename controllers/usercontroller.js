const router = require('express').Router();
const UserService = require('../service/user.service');


router.post('/signup', async (req, res) => {
    const userObj = await userService().userCreate(req.body);

    res.status(200).send(userObj);
})

router.post('/login', async (req, res) => {
    const loggedInObj = await userService().userLogin(req.body)

    res.status(200).send(loggedInObj);
})

const userService = () => new UserService()


module.exports = router;