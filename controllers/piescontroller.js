const router = require('express').Router();
const sequelize = require('../db')
const Pie = sequelize.import('../models/pie');

router.get('/', (req, res) => {
    Pie.findAll()
        .then(pie => res.status(200).json(pie))
        .catch(err => res.status(500).json({error: err.errors[0].message}))
})

router.post('/', (req, res) => {
    Pie.create({
        name_of_pie: req.body.nameOfPie,
        base_of_pie: req.body.baseOfPie,
        crust: req.body.crust,
        time_to_bake: req.body.timeToBake, 
        servings: req.body.servings, 
        rating: req.body.rating, 
        user_email: req.body.email
    })
        .then(pie => res.status(200).json(pie))
        .catch(err => res.status(500).json({error: err.errors[0].message}))
})

router.get('/:name', (req, res) => {
    Pie.findOne({where:{name_of_pie: req.params.name}})
        .then(pie => res.status(200).json(pie))
        .catch(err => res.status(500).json({error: err.errors[0].message}))
})

module.exports = router;