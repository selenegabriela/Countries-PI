import { GET_ALL_COUNTRIES, GET_ALL_ACTIVITIES, GET_COUNTRIES_BY_NAME } from '../actions';
const initialState = {
    countries: [],
    activities: [],
    matchCountries: [],
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        case GET_ALL_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            }
        case GET_COUNTRIES_BY_NAME:
            return {
                ...state,
                countries: action.payload
            }
        default:
            return {...state}
    }
}

