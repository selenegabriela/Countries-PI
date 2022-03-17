import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../actions';
import Card from './Card';
import PagesNumber from './PagesNumber';

export default function Paginator(){
    const dispatch = useDispatch();
    const allCountries = useSelector(state => state.countries);

    const [ page, setPage ] = useState(1); //2
    const [ countriesPerPage, setCountriesPerPage ] = useState(10);
    const indexEnd = page === 1 ? 9 : (page * countriesPerPage) - 1;
    const indexStart = page === 1 ? 0 : indexEnd - countriesPerPage; 
    const currentCountries = allCountries.slice(indexStart, indexEnd);

    const setPageNumber = (pageNumber) => {
        setPage(pageNumber);
    }
 
    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch]);
    
    
    return(
        <div>
            <h1>Países</h1>
            <PagesNumber countriesLength={allCountries.length} countriesPerPage={countriesPerPage} setPageNumber={setPageNumber}/>
            {
               currentCountries && currentCountries.map(country => {
                   return <Card image={country.image} name={country.name} continent={country.continent} key={country.id} />
               }) 
            }
            
        </div>
        
    )
}