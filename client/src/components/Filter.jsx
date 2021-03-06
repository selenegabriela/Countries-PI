import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllActivities, alphabeticalOrder, populationOrder, continentFilter, activitiesFilter } from '../actions';
import s from './Filter.module.css'

export default function Filter(props){

    const { flagRender, setPageNumber, changeFlagRender } = props;

    
    const dispatch = useDispatch();
    const allActivities = useSelector(state => state.activities);
    let incrementRender = flagRender + 1;
    
    
    useEffect(() => {
        dispatch(getAllActivities());
    }, [dispatch]);

    const handleAlphabetSelect = (e) => {
        e.preventDefault();
        dispatch(alphabeticalOrder(e.target.value));
        setPageNumber(1);
        changeFlagRender(incrementRender)
    }
    const handlePopulationSelect = (e) => {
        e.preventDefault();
        dispatch(populationOrder(e.target.value))
        setPageNumber(1);
        changeFlagRender(incrementRender)
    }
    const handleContinentSelect = (e) => {
        e.preventDefault();
        setPageNumber(1);
        dispatch(continentFilter(e.target.value))
    }
    const handleActivitiesSelect = (e) => {
        e.preventDefault();
        setPageNumber(1);
        dispatch(activitiesFilter(e.target.value))
    }

    return(
        <div className={s.contenedor}>
            <div className={s.contenedorDos}>
                <label className={s.label} htmlFor="">Ordenamiento y filtrado</label>
                <div className={s.contenedorTres}>
                    
                    <select className={`${s.select}`} onChange={e => handleAlphabetSelect(e)}>
                        <option>Alfabético</option>
                        <option value='Asc'>Ascendente</option>
                        <option value='Des'>Descendente</option>
                    </select>
                    <select className={`${s.select}`} onChange={e => handlePopulationSelect(e)}>
                        <option>Población</option>
                        <option value='Maj'>Mayor población</option>
                        <option value='Min'>Menor población</option>
                    </select>
            
                    
                

                    <select className={`${s.select}`} onChange={e => handleContinentSelect(e)} >
                        <option value='All'>Continente</option>
                        <option value='Americas'>América</option>
                        <option value='Africa'>África</option>
                        <option value='Europe'>Europa</option>
                        <option value='Asia'>Asia</option>
                        <option value='Oceania'>Oceanía</option>
                        <option value='Antarctic'>Antártida</option>
                    </select>
                    <select className={`${s.select}`} onChange={e => handleActivitiesSelect(e)}>
                        <option value='All'>Actividades</option>
                        
                        {   
                        ( typeof allActivities !== 'string') ? allActivities.map(activity => {
                            return <option value={activity.name} key={activity.id}>{activity.name}</option>
                            
                        }) : <option value='All'>{allActivities}</option>
                        }
                    </select>
                </div>
             </div>
        </div>
    )
}

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllActivities } from '../actions';

// export default function Filter(){
//     const dispatch = useDispatch();
//     const allActivities = useSelector(state => state.activities);

//     useEffect(() => {
//         dispatch(getAllActivities());
//     }, [dispatch]);

//     return(
//         <div>
//             <select>
//                 <option value='All'>Continente</option>
//                 <option value='Americas'>América</option>
//                 <option value='Africa'>África</option>
//                 <option value='Europe'>Europa</option>
//                 <option value='Asia'>Asia</option>
//                 <option value='Oceania'>Oceanía</option>
//                 <option value='Antarctic'>Antártida</option>
//             </select>
//             <select>
//                 <option value='All'>Ordenar por</option>
//                 <option value='Des'>Nombre ↑</option>
//                 <option value='Des'>Nombre ↓</option>
//                 <option value='Most'>Mayor población</option>
//                 <option value='Minor'>Menor población</option>
//             </select>
//             <select>
//                 <option value='All'>Actividades</option>
//                 {   
//                     allActivities && allActivities.map(activity => {
//                         return <option value={activity.name} key={activity.id}>{activity.name}</option>
                        
//                     })
//                 }
//             </select>
//         </div>
//     )
// }