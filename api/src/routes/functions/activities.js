const { Activity } = require('../../db');
const { getCountryById } = require('../functions/countries')

const postActivity = (name, difficulty, duration, season, idCountry) => {

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
        console.log(activity[0]);
        return activity[0].addCountry(idCountry)
        .then(() => 'Actividad creada correctamente')
        .catch(e => e);
    })
}

const addActivity = (idActivity, idCountry) => {
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