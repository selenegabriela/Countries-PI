const { Activity } = require('../../db');
const { getCountryById } = require('../functions/countries')

const postActivity = (name, difficulty, duration, season, idCountry) => {
    return Activity.create({
        name,
        difficulty,
        duration,
        season,
    })
    .then(activity => {
        return activity.addCountry(idCountry)
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


module.exports = {
    postActivity,
    addActivity,
};