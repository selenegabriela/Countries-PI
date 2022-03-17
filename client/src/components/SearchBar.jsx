import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountriesByName } from '../actions';

export default function SearchBar(){

    const [ name, setName ] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        e.preventDefault()
        setName(e.target.value);
    }

    const hancleClick = (e) => {
        e.preventDefault()
        dispatch(getCountriesByName(name))
    }

    return(
        <div>
            <input type="text" placeholder='Buscar país...' onChange={e => handleChange(e)}/>
            <button onClick={e => hancleClick(e)}>Buscar</button>
        </div>
    )
}