const express = require('express');
const { Router } = require('express');
const router = Router();
const {
    postActivity,
    addActivity,
} = require('./functions/activities');

router.post('/', (req, res, next) => {
    const { name, difficulty, duration, season, idCountry, idActivity } = req.body;   

    
    if(idActivity) {
        addActivity(idActivity, idCountry)
        .then(msg => res.json(msg))
        .catch(e => next(e));
    } else if(idCountry){
        postActivity(name, difficulty, duration, season, idCountry)
        .then(msg => res.json(msg))
        .catch(e => next(e));
    } else {
        res.json('Debe proporcionar un país');
    }
});

module.exports = router;