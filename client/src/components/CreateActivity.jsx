import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countriesActivities, createNewActivity } from "../actions";

export default function CreateActivity(){


    const [input, setInput] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        idCountry: []
    });

    const dispatch = useDispatch();
    const allCountries = useSelector(state => state.orderedCountries);
    const [africa, americas, antarctic, asia, europe, oceania] = allCountries;
    // console.log(allCountries)


    useEffect(() => {
        dispatch(countriesActivities());
    }, [dispatch])


    const handleChange = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }

    const handleCountryOptions = (e) => {
        e.preventDefault();
        if(e.target.checked){
            setInput({
                ...input,
                idCountry: [...input.idCountry, e.target.value]
            })
        }
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(createNewActivity(input));
        setInput({
            name: '',
            difficulty: '',
            duration: '',
            season: '',
            idCountry: []
        })
    }

    return(
        <div>
            <form onSubmit={e => handleOnSubmit(e)}>

                <label>Nombre: </label>
                <input name='name' type="text" placeholder="Nombre de la actividad..." onChange={e => handleChange(e)}/><br />
                <label>Dificultad: </label>
                <select name="difficulty" onChange={e => handleChange(e)}>
                    {
                        ['1','2','3','4','5','6','7','8','9','10'].map(number => {
                            return <option value={number}>{number}</option>
                        })
                    }
                </select><br />
                <label>Duración: </label>
                <select name='duration' onChange={e => handleChange(e)}>
                    <option value="1 a 3 horas">1 a 3 horas</option>
                    <option value="4 a 8 horas">4 a 8 horas</option>
                    <option value="8 a 12 horas">8 a 12 horas</option>
                    <option value="8 a 12 horas">Más de 12 horas</option>
                </select><br />
                <label>Temporada: </label>
                <select name='season' onChange={e => handleChange(e)}>
                    <option value="Otoño">Otoño</option>
                    <option value="Invierno">Invierno</option>
                    <option value="Primavera">Primavera</option>
                    <option value="Verano">Verano</option>
                </select> <br />

                <button type="submit">Crear</button> 

                <h2>África</h2>
                {
                    africa && africa.map(country => {
                        return <label><input onChange={e => handleCountryOptions(e)} type="checkbox" name="" value={country.id}/>{country.name}</label>
                    })
                }
                <h2>América</h2>
                {
                    americas && americas.map(country => {
                        return <label><input onChange={e => handleCountryOptions(e)} type="checkbox" name="" value={country.id}/>{country.name}</label>
                    })
                }

                 <h2>Antártida</h2>
                {
                    antarctic && antarctic.map(country => {
                        return <label><input onChange={e => handleCountryOptions(e)} type="checkbox" name="" value={country.id}/>{country.name}</label>
                    })
                }
                
                <h2>Asia</h2>
                {
                    asia && asia.map(country => {
                        return <label><input onChange={e => handleCountryOptions(e)} type="checkbox" name="" value={country.id}/>{country.name}</label>
                    })
                }
                
                <h2>Europa</h2>
                {
                    europe && europe.map(country => {
                        return <label><input onChange={e => handleCountryOptions(e)} type="checkbox" name="" value={country.id}/>{country.name}</label>
                    })
                }
                
                <h2>Oceanía</h2>
                {
                    oceania && oceania.map(country => {
                        return <label><input onChange={e => handleCountryOptions(e)} type="checkbox" name="" value={country.id}/>{country.name}</label>
                    })
                }
            </form>
        </div>
    )
}