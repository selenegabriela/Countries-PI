import axios from 'axios'
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES';
export const GET_COUNTRIES_BY_NAME = 'GET_COUNTRIES_BY_NAME';
export const ALPHABETICAL_ORDER = 'ALPHABETICAL_ORDER';
export const POPULATION_ORDER = 'POPULATION_ORDER';
export const CONTINENT_FILTER = 'CONTINENT_FILTER';
export const ACTIVITIES_FILTER = 'ACTIVITIES_FILTER';
export const COUNTRIES_ACTIVITIES = 'COUNTRIES_ACTIVITIES';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';

export const getAllCountries = () => {
    return function(dispatch){
        return axios.get('http://localhost:3001/api/countries')
        .then(countries => {
            return dispatch({type: GET_ALL_COUNTRIES, payload: countries.data });
        });
    }
}

export const getAllActivities = () => {
    return function(dispatch){
        return axios.get('http://localhost:3001/api/activity/')
        .then(activities => {
            return dispatch({type: GET_ALL_ACTIVITIES, payload: activities.data})
        })
        .catch(e => e)
    }
}

export const getCountriesByName = (name) => {
    return function(dispatch){
        return axios.get(`http://localhost:3001/api/countries?name=${name}`)
        .then(countries => {
            return dispatch({type: GET_COUNTRIES_BY_NAME, payload: countries.data})
        })
        .catch(e => e);
    }
}

export const countriesActivities = () => {
    return function(dispatch){
        return axios.get('http://localhost:3001/api/countries/activitiesCountry')
        .then(countries => dispatch({type: COUNTRIES_ACTIVITIES, payload: countries.data}))
    }
}
export const alphabeticalOrder = payload => {
    return {type: ALPHABETICAL_ORDER, payload}
}

export const populationOrder = payload => {
    return {type: POPULATION_ORDER, payload}
}

export const continentFilter = payload => {
    return {type: CONTINENT_FILTER, payload}
}

export const activitiesFilter = payload => {
    return {type: ACTIVITIES_FILTER, payload}
}


export const createNewActivity = payload => {
    return function(dispatch){
        return axios.post('http://localhost:3001/api/activity/', payload)
        .then(msg => dispatch({type: CREATE_ACTIVITY, payload: msg.data }))
    }
}
