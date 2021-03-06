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
export const GET_COUNTRY_BY_ID = 'GET_COUNTRY_BY_ID';
export const DELETE_RELATION_ACTIVITY = 'DELETE_RELATION_ACTIVITY';

export const getAllCountries = () => {
    return function(dispatch){
        return axios.get('/countries')
        .then(countries => {
            return dispatch({type: GET_ALL_COUNTRIES, payload: countries.data });
        });
    }
}

export const getAllActivities = () => {
    return function(dispatch){
        return axios.get('/activity/')
        .then(activities => {
            return dispatch({type: GET_ALL_ACTIVITIES, payload: activities.data})
        })
        .catch(e => e)
    }
}

export const getCountriesByName = (name) => {
    return function(dispatch){
        return axios.get(`/countries?name=${name}`)
        .then(countries => {
            return dispatch({type: GET_COUNTRIES_BY_NAME, payload: countries.data})
        })
        .catch(e => e);
    }
}

export const countriesActivities = () => {
    return function(dispatch){
        return axios.get('/countries/countriesActivity')
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
        return axios.post('/activity/', payload)
        .then(msg => dispatch({type: CREATE_ACTIVITY, payload: msg.data }))
    }
}

export const getCountryById = id => {
    return function(dispatch){
        return axios.get(`/countries/${id}`)
        .then(country => dispatch({type: GET_COUNTRY_BY_ID, payload: country.data}));
    }
}

export const deleteRelationActivity = payload => {
    return function(dispatch){
        return axios.delete('/activity/', {data: payload})
        .then(msg => dispatch({type: DELETE_RELATION_ACTIVITY, payload: msg.data}));
    }
}
