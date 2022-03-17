import React from 'react';
import { Link } from 'react-router-dom';

export default function NewActivity(){
    return(
        <div>
            <Link to='/activity'>
                <button>Nueva actividad</button>
            </Link>
        </div>
    )
}