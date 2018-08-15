const router = require('express').Router();
const UserService = require('../service/user.service');


router.post('/signup', async (req, res) => {
    const userObj = await userService().userCreate(req.body);
    
    userObj.error ?
        res.status(500).send(userObj.e) : 
        res.status(200).send(userObj);
})

router.post('/login', async (req, res) => {
    const loggedInObj = await userService().userLogin(req.body)

    loggedInObj.error ? 
        res.status(500).send(loggedInObj.errorMsg) :
        res.status(200).send(loggedInObj);
})

const userService = () => new UserService()


module.exports = router;