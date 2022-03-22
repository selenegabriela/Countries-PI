import React, { useEffect } from "react";
import { getCountryById } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

export default function Detail(props){

    const params = useParams();
    const { id } = params;
    console.log(id)
    const dispatch = useDispatch();
    const country = useSelector(state => state.detail);

    useEffect(() => {
        dispatch(getCountryById(id))
    }, [dispatch])
    return(
        <div>
            <img src={country.image} alt="not found"/>
            <h1>{country.name}</h1>
            <h3>{country.continent}</h3>
            <h4>{country.capital}</h4>
            <h4>{country.subregion}</h4>
            <h4>{country.area}</h4>
            <h4>{country.population}</h4>
            <h4>{country.id}</h4>
            {
                country.activities && country.activities.map(activity => {
                    return <div>
                        <h2>{activity.name}</h2>
                        <h2>{activity.difficulty}</h2>
                        <h2>{activity.duration}</h2>
                        <h2>{activity.season}</h2>
                    </div>
                })
            }
        </div>
    )
}

