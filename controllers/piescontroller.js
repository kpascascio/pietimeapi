const router = require('express').Router();
const validateSession = require('../middleware/validate-session');
const PieService = require('../service/pie.service');

router.get('/', (req, res) => {
    pieService().getAllPies()
        .then(pie => res.status(200).json(pie))
        .catch(err => res.status(500).json({error: err}))
})

router.post('/', validateSession, (req, res) => {
    if (!req.errors){
        const pieFromRequest = {
            name_of_pie: req.body.nameOfPie,
            base_of_pie: req.body.baseOfPie,
            crust: req.body.crust,
            time_to_bake: req.body.timeToBake, 
            servings: req.body.servings, 
            rating: req.body.rating, 
            pieShopId: req.body.pieShopId
        }        
        
        pieService().createPie(pieFromRequest)
            .then(pie => res.status(200).json(pie))
            .catch(err => res.json(req.errors))
    } else {
        res.status(500).json(req.errors)
    }
})

router.get('/:name', (req, res) => {
    pieService().getPieByName(req.params.name)
        .then(pie => res.status(200).json(pie))
        .catch(err => res.status(500).json({error: err}))
})

router.put('/:id', (req, res) => {
    if (!req.errors){       
        pieService().updatePie(req.body)
        .then(pie => {
            
            console.log('here')
            return res.status(200).json(pie)
        })
            .catch(err => res.json(req.errors))
    } else {
        res.status(500).json(req.errors)
    }
})


const pieService = () => new PieService() 

module.exports = router;