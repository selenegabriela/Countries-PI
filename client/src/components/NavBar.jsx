import React from 'react';
import NewActivity from './NewActivity';
import { Link } from 'react-router-dom';
import s from './NavBar.module.css'

export default function NavBar(){
    return(
        <div className={s.background}>
            
                <Link to='/home' className={s.a}>
                    <button className={s.btn} id={s.inicio}>Inicio</button>
                </Link>
            
            
                {/* <h1 className={s.h}>Países app!</h1> */}
            
                <NewActivity />
        </div>
    )
}