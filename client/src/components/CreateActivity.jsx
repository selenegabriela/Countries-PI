import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countriesActivities, createNewActivity, getAllActivities } from "../actions";
import s from './CreateActivity.module.css';


function validate(input){
    const errors = {};
    if(input.name.length < 3) errors.name = 'Debe ingresar un nombre válido.';
    if(!input.idCountry.length) errors.idCountry = 'Debe seleccionar al menos un país';
    return errors;
}

export default function CreateActivity(){


    const [input, setInput] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        idCountry: []
    });
    const [ errors, setErrors ] = useState({});

    const dispatch = useDispatch();
    const allCountries = useSelector(state => state.orderedCountries);
    
    // console.log(allCountries)


    useEffect(() => {
        dispatch(countriesActivities());
    }, [dispatch])


    const handleChange = (e) => {
        e.preventDefault();
        if(e.target.name === "idCountry") {
            setInput({
                ...input,
                idCountry: [...input.idCountry, e.target.value]
            })
            setErrors(validate({
                ...input,
                [e.target.name]: [...input.idCountry, e.target.value]
            })) 
        } else {
            setInput({
                ...input,
                [e.target.name]: e.target.value,
            })
            setErrors(validate({
                ...input,
                [e.target.name]: e.target.value
            })) 
        } 
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if(errors.name || errors.idCountry) {
            alert('Debe llenar y/o seleccionar todos los campos')
        } else {

            dispatch(createNewActivity(input));
            setInput({
                name: '',
                difficulty: '',
                duration: '',
                season: '',
                idCountry: []
            });
            dispatch(getAllActivities());
            alert('La actividad se creó correctamente.');
        }
    }

    const deleteCountry = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            idCountry: input.idCountry.filter(country => country !== e.target.value)
        })
    }

    return(
        <div className={s.contenedor}>
            <form onSubmit={e => handleOnSubmit(e)}>

                <label>Nombre: </label>
                <input name='name' value={input.name} type="text" placeholder="Nombre de la actividad..." onChange={e => handleChange(e)}/>
                {
                        errors.name && <label>{errors.name}</label>
                }
                <br />
                <label>Dificultad: </label>
                <select value={input.difficulty} name="difficulty" onChange={e => handleChange(e)}>
                    <option>1 - 10</option>
                    {
                        ['1','2','3','4','5','6','7','8','9','10'].map(number => {
                            
                            return <option key={number} value={number}>{number}</option>
                        })
                    }
                </select><br />
                <label>Duración: </label>
                <select value={input.duration} name='duration' onChange={e => handleChange(e)}>
                    <option>Horas</option>
                    <option value="1 a 3 horas">1 - 3</option>
                    <option value="4 a 8 horas">4 - 8</option>
                    <option value="8 a 12 horas">8 - 12</option>
                    <option value="Más de 12 horas">Más de 12</option>
                </select><br />
                <label>Temporada: </label>
                <select value={input.season} name='season' onChange={e => handleChange(e)}>
                    <option>Estaciones</option>
                    <option value="Otoño">Otoño</option>
                    <option value="Invierno">Invierno</option>
                    <option value="Primavera">Primavera</option>
                    <option value="Verano">Verano</option>
                </select> <br />

                
                <select value={'value' || input.idCountry} name="idCountry" onChange={e => handleChange(e)}>
                    <option>Seleccionar país</option>
                    {
                        allCountries && allCountries.map(country => {
                            return <option key={country.id} value={country.id}>{country.name}</option>
                        })
                    }
                </select>
                {
                    errors.idCountry && <label>{errors.idCountry}</label>
                }
                <button type="submit" disabled={((errors.name || errors.idCountry) || (!input.name || !input.idCountry.length)) && 'disabled'}>Crear</button> 
                {
                    input.idCountry.length ? input.idCountry.map(country => {
                        return <label key={country}>{country}<button value={country} onClick={e => deleteCountry(e)}>Eliminar</button></label> 
                    }) : ''
                }
            </form>
        </div>
    )
}