const axios = require('axios');
const { Op, Sequelize } = require('sequelize');
const { Country, Activity } = require('../../db');

const getAllCountries = () => {
    axios.get('https://restcountries.com/v3/all')
    .then(countries => countries.data.map(country => {
        
        Country.findOrCreate({
            where: {id: country.cca3},
            defaults: {
                id: country.cca3,
                name: country.name.common,
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
    .then(country => {
        if(country === null) return false;
        else return country;
    })
    .catch(e => e);
}

// orderCountryByName***
const orderByName = () => {
    return Country.findAll({
            attributes: ['id', 'name'],
            // order: ['name', 'ASC']
            order:[
                [Sequelize.literal('name'), 'asc']
            ],
    })
    .then(countries => countries)
    //{
        // const africa = [];
        // const americas = [];
        // const antarctic = [];
        // const asia = [];
        // const europe = [];
        // const oceania = [];
        // const contenedor = [];

        //     countries.forEach(country => {
        //         if(country.continent === 'Africa') africa.push(country)
        //         if(country.continent === 'Americas') americas.push(country)
        //         if(country.continent === 'Antarctic') antarctic.push(country)
        //         if(country.continent === 'Asia') asia.push(country)
        //         if(country.continent === 'Europe') europe.push(country)
        //         if(country.continent === 'Oceania') oceania.push(country)
        //     });

        // contenedor.push(africa, americas, antarctic, asia, europe, oceania);
        // console.log(contenedor.length);
        // return contenedor;
    //})
    .catch(e => e);
}

module.exports = {
    getAllCountries,
    getAllDbCountries,
    getCountriesByName,
    getCountryById,
    orderByName,
};