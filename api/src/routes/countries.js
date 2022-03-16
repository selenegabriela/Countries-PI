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
        .then(countries => res.json(countries))
        .catch(e => next(e));
    } else {
        getAllDbCountries()
        .then(countries => res.json(countries))
        .catch(e => next(e));
    }
});

router.get('/:id', (req, res, next) => {
    const { id } = req.params;

    getCountryById(id)
    .then(country => res.json(country))
    .catch(e => next(e));
});

module.exports = router;