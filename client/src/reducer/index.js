import { GET_ALL_COUNTRIES, GET_ALL_ACTIVITIES, GET_COUNTRIES_BY_NAME, ALPHABETICAL_ORDER, POPULATION_ORDER, CONTINENT_FILTER } from '../actions';
const initialState = {
    countries: [],
    activities: [],
    auxiliarCountries: [],
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                auxiliarCountries: action.payload,
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
        case ALPHABETICAL_ORDER:
            const alphabeticOrderCountries = state.countries.sort((a, b) => {
                const firstElement = a.name.toLowerCase();
                const secondElement = b.name.toLowerCase();

                if(action.payload === 'Asc') {
                    if(firstElement < secondElement) return - 1;
                    if(firstElement > secondElement) return 1;
                    else return 0;
                } else {
                    if(firstElement > secondElement) return - 1;
                    if(firstElement < secondElement) return 1;
                    else return 0;
                }
            })
            return{
                ...state,
                countries: alphabeticOrderCountries
            }
        case POPULATION_ORDER:
            const populationOrderCountries = state.countries.sort((a, b) => {
                const elementOne = a.population;
                const elementTwo = b.population;

                if(action.payload === 'Min'){
                    if(elementOne < elementTwo) return - 1;
                    if(elementOne > elementTwo) return 1;
                    else return 0;
                } else {
                    if(elementOne > elementTwo) return - 1;
                    if(elementOne < elementTwo) return 1;
                    else return 0;       
                }
            })
            return {
                ...state,
                countries: populationOrderCountries,
            }
        case CONTINENT_FILTER:
            const allCountries = state.auxiliarCountries;
            const filterContinentCountries = action.payload === 'All' ? 
                                            allCountries :
                                            allCountries.filter(country => action.payload === country.continent)
            return {
                ...state,
                countries: filterContinentCountries,
            }
        default:
            return {...state}
    }
}

