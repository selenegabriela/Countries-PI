import React, { useEffect, useState } from "react";
import { getCountryById } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { createNewActivity } from "../actions";


export default function Detail(){

    
    const params = useParams();
    const { id } = params;
    console.log(id)
    const dispatch = useDispatch();
    const country = useSelector(state => state.detail);
    const activities = useSelector(state => state.activities);
    const [ input, setInput ] = useState({
        idCountry: id,
        idActivity: '',
    });
    const [ render, setRender ] = useState(1);

    console.log(activities)

    useEffect(() => {
        dispatch(getCountryById(id));
    }, [ id, dispatch, render ] );

    const handleOnChange = (e) => {
        e.preventDefault();
        setInput({
            idCountry: id,
            idActivity: e.target.value,
        })
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(createNewActivity(input));
        setInput({
            ...input,
            idActivity: '',
        });
        setRender(render+1)
        alert('Actividad agregada correctamente');
    }
    return(
        (typeof country !== 'string') ? <div>
            <form onSubmit={e => handleOnSubmit(e)}>
                <label>Agregar actividad a país</label>
                <select onChange={e => handleOnChange(e)} value={input.idActivity || 'value'}>
                    <option>Actividades</option>
                    {
                        (activities && typeof activities !== 'string') && activities.map(activity => {
                            return <option key={activity.id} value={activity.id}>{activity.name}</option>
                        })
                    }
                </select>
                <button type="submit">Agregar</button>
            </form>
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
                    return <div key={activity.id}>
                        <h2>{activity.name}</h2>
                        <h2>{activity.difficulty}</h2>
                        <h2>{activity.duration}</h2>
                        <h2>{activity.season}</h2>
                    </div>
                })
            }
        </div> : <h2>País no existente</h2>
    )
}

