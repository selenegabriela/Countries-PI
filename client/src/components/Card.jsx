import React from "react";

export default function Card(props){
    const { image, name, continent } = props;
    return(
        <div>
            <div>
                <div>
                    <img src={image} alt="image not found" width='400px' height='250px'/>
                </div>
                <h2>{name}</h2>
                <h4>{continent}</h4>
            </div>
        </div>
    )
}