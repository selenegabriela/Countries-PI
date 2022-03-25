import React from 'react';
import { Link } from 'react-router-dom';
import s from './LandingPage.module.css'

export default function LandingPage(){
    return(
        <div className={s.background}>      
                <h1 className={s.h}>¡Bienvenidos a nuestra app de países!</h1>
                <Link to='/home'>
                    <button className={s.btn}>Explorar</button>
                </Link>

        </div>
    )
}