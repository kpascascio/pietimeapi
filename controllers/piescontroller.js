const router = require('express').Router();
const sequelize = require('../db')
const Pie = sequelize.import('../models/pie');
const validateSession = require('../middleware/validate-session');

router.get('/', (req, res) => {
    Pie.findAll()
        .then(pie => res.status(200).json(pie))
        .catch(err => res.status(500).json({error: err}))
})

router.post('/', validateSession,(req, res) => {
    if (!req.errors){
        Pie.create({
            name_of_pie: req.body.nameOfPie,
            base_of_pie: req.body.baseOfPie,
            crust: req.body.crust,
            time_to_bake: req.body.timeToBake, 
            servings: req.body.servings, 
            rating: req.body.rating, 
            userId: req.user.id
        })
        .then(pie => res.status(200).json(pie))
        .catch(err => res.json(req.errors))
    } else {
        res.status(500).json(req.errors)
    }
})

router.get('/:name', (req, res) => {
    Pie.findOne({where:{name_of_pie: req.params.name}, include: ['user']},)
        .then(pie => res.status(200).json(pie))
        .catch(err => res.status(500).json({error: err}))
})


module.exports = router;