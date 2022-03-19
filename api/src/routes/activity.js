const express = require('express');
const { Router } = require('express');
const router = Router();
const {
    postActivity,
    addActivity,
    getAllActivities,
} = require('./functions/activities');

router.get('/', (req, res, next) => {
    getAllActivities()
    .then(activities => {
        if(activities.length) res.status(200).json(activities);
        else res.json('Sin actividades agregadas');
    })
    .catch(e => next(e));
})
router.post('/', (req, res, next) => {
    const { name, difficulty, duration, season, idCountry, idActivity } = req.body;   

    
    if(idActivity) {
        addActivity(idActivity, idCountry)
        .then(msg => res.status(200).json(msg))
        .catch(e => next(e));
    } else if(idCountry && name){
        postActivity(name, difficulty, duration, season, idCountry)
        .then(msg => res.status(200).json(msg))
        .catch(e => next(e));
    } else {
        res.json({msg: 'Debe proporcionar los datos solicitados'});
    }
});

module.exports = router;