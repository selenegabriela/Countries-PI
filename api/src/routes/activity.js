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
        else res.status(404).json('sin actividades agregadas');
    })
    .catch(e => next(e));
})
router.post('/', (req, res, next) => {
    const { name, difficulty, duration, season, idCountry, idActivity } = req.body;   

    
    if(idActivity) {
        addActivity(idActivity, idCountry)
        .then(msg => res.status(200).json(msg))
        .catch(e => next(e));
    } else if(idCountry){
        postActivity(name, difficulty, duration, season, idCountry)
        .then(msg => res.status(200).json(msg))
        .catch(e => next(e));
    } else {
        res.json('Debe proporcionar un país');
    }
});

module.exports = router;