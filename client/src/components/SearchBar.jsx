import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountriesByName } from '../actions';
import s from './SearchBar.module.css'

export default function SearchBar(props){

    const { setPageNumber } = props;

    const [ name, setName ] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        e.preventDefault()
        setName(e.target.value);
    }

    const hancleClick = (e) => {
        e.preventDefault();
        dispatch(getCountriesByName(name));
        setPageNumber(1);
        setName('');
    }

    return(
        <div className={s.contenedor}>
            <input className={`${s.input} ${s.inputBtn}`} value={name} type="text" placeholder='Buscar país...' onChange={e => handleChange(e)}/>
            <button className={`${s.btn} ${s.inputBtn}`} onClick={e => hancleClick(e)}>Buscar</button>
        </div>
    )
}