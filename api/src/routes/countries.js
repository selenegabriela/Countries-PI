const express = require('express');
const { Router } = require('express');
const router = Router();
const {
    getAllDbCountries,
    getCountriesByName,
    getCountryById,
} = require('./functions/countries');

router.use(express.json());
router.get('/', (req, res, next) => {
    const { name } = req.query;

    if(name){
        getCountriesByName(name)
        .then(countries => {
            if(countries.length) res.status(200).json(countries)
            else res.json('País no encontrado')
        })
        .catch(e => next(e));
    } else {
        getAllDbCountries()
        .then(countries => res.status(200).json(countries))
        .catch(e => next(e));
    }
});

router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    
    getCountryById(id)
    .then(country => {
        if(country) res.status(200).json(country)
        else res.status(404).json('País no encontrado');
    })
    .catch(e => next(e));
});

module.exports = router;