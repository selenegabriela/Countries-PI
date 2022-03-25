import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css'

export default function NewActivity(){
    return(
        
            <NavLink to='/activity'>
                <button className={s.btn} id={s.nuevaActividad}>Nueva actividad</button>
            </NavLink>
        
    )
}