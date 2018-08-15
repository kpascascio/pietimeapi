const router = require('express').Router();
const validateSession = require('../middleware/validate-session');
const PieShopService = require('../service/pieshop.service');

router.get('/', (req, res) => {
   pieShopService().getAllPieShop()
        .then(shops => res.status(200).json(shops))
        .catch(err => res.status(500).json(err))
})

router.post('/', validateSession, (req, res) => {
    const pso= {
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
    }
    pieShopService().getAllPieShop(pso)
        .then(createdShop => res.status(200).json(createdShop))
        .catch(err => res.status(500).json(err))
})

const pieShopService = () => new PieShopService() 


module.exports = router;