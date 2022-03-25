import React from "react";
import { Link } from 'react-router-dom';


export default function Card(props){
    const { image, name, continent, id } = props;
    return(
        <div >
            <div >
                <Link to={`/detail/${id}`}>  
                    <div>
                        <img src={image} alt="not found" width='400px' height='250px'/>
                    </div>
                    <h2>{name}</h2>
                    <h4>{continent}</h4>
                </Link>
            </div>
        </div>
    )
}