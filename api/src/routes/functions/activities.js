const { Activity } = require('../../db');
const { getCountryById } = require('../functions/countries')

const postActivity = (body) => {
    const { name, difficulty, duration, season, idCountry} = 
    body; 
    const uniqueIdCountries = new Set(idCountry);
    const arrId = [...uniqueIdCountries]
    console.log(arrId);
    const newName = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase();
    return Activity.findOrCreate({
        where: {
            name: newName
        },
        defaults: {

            difficulty,
            duration,
            season,
        }
    })
    .then(activity => {
        
        return activity[0].addCountry(arrId)
        .then(() => 'Actividad creada correctamente')
        .catch(e => e);
    })
}

const addActivity = (body) => {
    const { idCountry, idActivity } = body; 
    return getCountryById(idCountry)
    .then(country => {
        return country.addActivity(idActivity)
        .then(() => 'Actividad agregada correctamente')
        .catch(e => e);
    })
}

const getAllActivities = () => {
    return Activity.findAll()
    .then(activities => activities)
    .catch(e => e)
}


module.exports = {
    postActivity,
    addActivity,
    getAllActivities,
};