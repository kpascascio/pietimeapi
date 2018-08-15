const sequelize = require('../db'); 
const PieShop = sequelize.import('../models/pieshop');

class PieShopService {

    getAllPieShop() {
        return PieShop.findAll()
    }

    createPieShop(pieShopObj){
        return PieShop.create(pieShopObj)
    }
}

module.exports = PieShopService;