import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../actions';
import Card from './Card';
import PagesNumber from './PagesNumber';
import Filter from './Filter';
import SearchBar from './SearchBar';
import s from './Paginator.module.css'

export default function Paginator(){
    const dispatch = useDispatch();
    const allCountries = useSelector(state => state.countries);

    const [ flagRender, setFlagRender ] = useState(1);
    const [ page, setPage ] = useState(1); 
    const [ countriesPerPage ] = useState(10);
    const indexEnd = page === 1 ? 9 : (page * countriesPerPage) - 1; 
    const indexStart = page === 1 ? 0 : indexEnd - countriesPerPage; 
    const currentCountries = (typeof allCountries !== 'string') ? allCountries.slice(indexStart, indexEnd) : allCountries;


    const changeFlagRender = (n) => {
        setFlagRender(n);
    }
    const setPageNumber = (number) => {
        setPage(number)
    }
 
    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch]);
    
    
    return(
        <div >
            <div className={s.contenedorUno}>
                {
                    <Filter flagRender={flagRender} changeFlagRender={changeFlagRender} setPageNumber={setPageNumber} />
                }          
                {
                    <SearchBar />
                }
            </div>
            {
                (typeof currentCountries !== 'string') && <PagesNumber countriesLength={allCountries.length} countriesPerPage={countriesPerPage} setPageNumber={setPageNumber}/>
            }
            <div className={s.contenedorCard}>

                {
                (typeof currentCountries !== 'string') ? currentCountries.map(country => {
                    return <Card image={country.image} name={country.name} continent={country.continent} id={country.id} key={country.id} />
                }) : <h2>{allCountries}</h2>
                }
            </div>
            
        </div>
        
    )
}