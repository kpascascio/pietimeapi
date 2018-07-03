const router = require('express').Router();
const sequelize = require('../db'); 
const PieShop = sequelize.import('../models/pieshop');
const validateSession = require('../middleware/validate-session');

router.get('/', (req, res) => {
    PieShop.findAll()
        .then(shops => res.status(200).json(shops))
        .catch(err => res.status(500).json(err))
})

router.post('/', validateSession, (req, res) => {
    PieShop.create({
        shop_name: req.body.name, 
        shop_description: req.body.description, 
        shop_street_address: req.body.street, 
        shop_state: req.body.state, 
        shop_city: req.body.city, 
        shop_zip: req.body.zip, 
        shop_phone_number: req.body.phone, 
        shop_website: req.body.website, 
        shop_rating: req.body.rating,
        userId: req.user.id
    })
    .then(createdShop => res.status(200).json(createdShop))
    .catch(err => res.status(500).json(err))
})

module.exports = router;