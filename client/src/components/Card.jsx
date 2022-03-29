import React from "react";
import { Link } from 'react-router-dom';
import s from './Card.module.css';


export default function Card(props){
    const { image, name, continent, id } = props;
    return(
        
            <div className={s.contenedor}>
                <Link to={`/detail/${id}`}>  
                    <div className={s.contenedorImg}>
                        <img className={s.img} src={image} alt="not found" width='400px' height='250px'/>
                    </div>
                </Link>
                    <div>
                        <div>
                            <h2 className={s.h2}>{name}</h2>
                        </div>
                        <div>
                            <h3 className={s.h3}>{continent}</h3>
                        </div>
                    </div>
            </div>
        
    )
}