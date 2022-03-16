const axios = require('axios');
const { Op } = require('sequelize');
const { Country, Activity } = require('../../db');

const getAllCountries = () => {
    axios.get('https://restcountries.com/v3/all')
    .then(countries => countries.data.map(country => {
        
        Country.findOrCreate({
            where: {id: country.cca3},
            defaults: {
                id: country.cca3,
                name: country.name.official,
                image: country.flags[0] ? country.flags[0] : 'no image',
                continent: country.region,   
                capital: country.capital ?  country.capital[0] : "no information",
                subregion: country.subregion,
                area: country.area,
                population: country.population,
            },
        });
    }));  
}

const getAllDbCountries = () => {
    
    return Country.findAll({
        include: {
            model: Activity,
            // attributes: ['name']
        }
    })
    .then(countries => countries)
    .catch(e => e);
}

const getCountriesByName = (name) => {
    return Country.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            }
        },
        include: {
            model: Activity,
        }
    })
    .then(countries => countries)
    .catch(e => e);
}

const getCountryById = (id) => {
    return Country.findByPk(id, {
        include: {
            model: Activity,
        }
    })
    .then(country => country)
    .catch(e => e);
}

module.exports = {
    getAllCountries,
    getAllDbCountries,
    getCountriesByName,
    getCountryById,
};