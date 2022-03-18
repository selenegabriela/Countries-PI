import React from 'react';
import NewActivity from './NewActivity';
import { Link } from 'react-router-dom';

export default function NavBar(){
    return(
        <div>
            <h1>Países</h1>
            <Link to='/home'>
                <button>Inicio</button>
            </Link>
            <NewActivity />
        </div>
    )
}