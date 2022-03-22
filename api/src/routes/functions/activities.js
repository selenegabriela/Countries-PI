const { Activity } = require('../../db');
const { getCountryById } = require('../functions/countries')

const postActivity = (body) => {
    const { name, difficulty, duration, season, idCountry} = 
    body; 
    return Activity.findOrCreate({
        where: {
            name: name.toLowerCase(),
        },
        defaults: {

            difficulty,
            duration,
            season,
        }
    })
    .then(activity => {
        
        return activity[0].addCountry(idCountry)
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