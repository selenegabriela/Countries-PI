import React from 'react';
import Paginator from './Paginator';
import s from './Home.module.css'


export default function Home(){
    
    return(
        <div className={s.contenedor}>
            <Paginator />
        </div>
    )
}