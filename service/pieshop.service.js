const sequelize = require('../db'); 
const PieShop = sequelize.import('../models/pieshop');
const User = sequelize.model('user');

class PieShopService {

    getAllPieShop() {
        return PieShop.findAll()
    }

    createPieShop(pieShopObj){
        console.log(pieShopObj)
        return PieShop.create(pieShopObj)
    }

    getMyShop(userId){
        return PieShop.findOne({where:{ userId: userId}, include:'user'})
    }

    getShopPies(id){
        return PieShop.find({where: {id}})
    }
}

module.exports = PieShopService;