import React, { useEffect, useState } from "react";
import { getCountryById } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { createNewActivity } from "../actions";
import { deleteRelationActivity } from "../actions";
import s from './Detail.module.css'


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

    const handleOnClick = (e) => {
        e.preventDefault();
        dispatch(deleteRelationActivity({idActivity: e.target.value, idCountry: id}));
        setRender(render+1);
        alert('Actividad eliminada correctamente');
        console.log(e.target.value, id)
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(!input.idActivity){
            alert('No se seleccionó ninguna actividad');
        } else {
            dispatch(createNewActivity(input));
            setInput({
                ...input,
                idActivity: '',
            });
            setRender(render+1)
            alert('Actividad agregada correctamente');
        }
    }
    return(
        (typeof country !== 'string') ? 
        <div className={country.activities && country.activities.length ? s.contenedor : s.sinActividades} >
            <div className={s.detallesForm}>

                <form className={s.form} onSubmit={e => handleOnSubmit(e)}>
                    
                    <select className={s.select} onChange={e => handleOnChange(e)} value={input.idActivity || 'value'}>
                        <option >Agregar actividad a país</option>
                        {
                            (activities && typeof activities !== 'string') && activities.map(activity => {
                                return <option key={activity.id} value={activity.id}>{activity.name}</option>
                            })
                        }
                    </select>
                    <button className={s.btn} type="submit">Agregar</button>
                </form>
                <div className={s.detalles}> 
                    <img className={s.img} src={country.image} alt="not found"/>
                    <h1>{country.name}</h1>
                    <div className={s.espDetalles}>
                        <h4 className={s.fuente}>Continente: {country.continent}</h4>
                        <h4 className={s.fuente}>Capital: {country.capital}</h4>
                        <h4 className={s.fuente}>Subregión: {country.subregion}</h4>
                        <h4 className={s.fuente}>Área: {country.area} km2</h4>
                        <h4 className={s.fuente}>Población: {country.population}</h4>
                        <h4 className={s.fuente}>Id: {country.id}</h4>
                    </div>
                </div>
            </div>
              
            <div className={s.actividades}>
                {
                    country.activities && country.activities.map(activity => {
                        return <div className={s.actividad} key={activity.id}>
                            <button className={s.delete} value={activity.id} onClick={e => handleOnClick(e)}>X</button>
                            <h4 className={s.fuenteActividad}>Actividad: {activity.name}</h4>
                            <h4 className={s.fuenteActividad}>Dificultad: {activity.difficulty}</h4>
                            <h4 className={s.fuenteActividad}>Duración: {activity.duration}</h4>
                            <h4 className={s.fuenteActividad}>Estación: {activity.season}</h4>
                        </div> 
                    })
                }
            </div>
        </div> : <h2>País no existente</h2>
    )
}

