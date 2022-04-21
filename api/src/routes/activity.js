const express = require('express');
const { Router } = require('express');
const router = Router();
const {
    postActivity,
    addActivity,
    getAllActivities,
    deleteRelationActivity,
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
    const { name, idCountry, idActivity } = req.body;   

    
    if(idActivity && idCountry.length) {
        addActivity(req.body)
        .then(msg => res.status(200).json(msg))
        .catch(e => next(e));
    } else if(idCountry.length && name){
        postActivity(req.body)
        .then(msg => res.status(200).json(msg))
        .catch(e => next(e));
    } else {
        res.json('Debe proporcionar los datos solicitados');
    }
});
router.delete('/', (req, res, next) => {
    const { idCountry, idActivity } = req.body;
    console.log(idCountry, idActivity);
    if(idCountry && idActivity){
        deleteRelationActivity(req.body)
        .then(msg => res.json(msg))
        .catch(e => next(e));
    } else {
        res.json('Debe proporcionar la actividad a borrar y el país.');
    }
})

module.exports = router;