const sequelize = require('../db')
const Pie = sequelize.import('../models/pie');

class PieService {

    getAllPies() {
        return Pie.findAll()
    }

    getPieByName(name) {
        return Pie.findOne({where:{name_of_pie: name}, include: ['user']},)
    }

    createPie(pieobj){
        return Pie.create(pieobj)
    }
}

module.exports = PieService;