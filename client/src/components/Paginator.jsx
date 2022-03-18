import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../actions';
import Card from './Card';
import PagesNumber from './PagesNumber';
import Filter from './Filter';

export default function Paginator(){
    const dispatch = useDispatch();
    const allCountries = useSelector(state => state.countries);

    const [ flagRender, setFlagRender ] = useState(1);
    const [ page, setPage ] = useState(1); //2
    const [ countriesPerPage, setCountriesPerPage ] = useState(10);
    const indexEnd = page === 1 ? 9 : (page * countriesPerPage) - 1;
    const indexStart = page === 1 ? 0 : indexEnd - countriesPerPage; 
    const currentCountries = allCountries.slice(indexStart, indexEnd);

    const changeFlagRender = (n) => {
        setFlagRender(n);
    }
    const setPageNumber = (number) => {
        setPage(number)
    }
 
    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch]);
    
    console.log(allCountries);
    console.log(currentCountries);
    return(
        <div>
            <Filter flagRender={flagRender} changeFlagRender={changeFlagRender} setPageNumber={setPageNumber} />
            
            {
                (typeof currentCountries !== 'string') && <PagesNumber countriesLength={allCountries.length} countriesPerPage={countriesPerPage} setPageNumber={setPageNumber}/>
            }
            {
               (typeof currentCountries !== 'string') ? currentCountries.map(country => {
                   return <Card image={country.image} name={country.name} continent={country.continent} key={country.id} />
               }) : <h2>País no encontrado</h2>
            }
            
        </div>
        
    )
}