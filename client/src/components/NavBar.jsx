import React from 'react';
import NewActivity from './NewActivity';
import { Link } from 'react-router-dom';
import s from './NavBar.module.css'
import { useDispatch } from 'react-redux';
import { getAllCountries } from '../actions';


export default function NavBar(){

    const dispatch = useDispatch();
    const handleOnClick = (e) => {
        dispatch(getAllCountries());
    }
    return(
        <div className={s.background}>
            
                <Link to='/home' className={s.a}>
                    <button className={s.btn} id={s.inicio} onClick={e => handleOnClick(e)}>Inicio</button>
                </Link>
            
            
                {/* <h1 className={s.h}>Países app!</h1> */}
            
                <NewActivity />
        </div>
    )
}