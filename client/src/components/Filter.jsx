import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllActivities } from '../actions';

export default function Filter(){
    const dispatch = useDispatch();
    const allActivities = useSelector(state => state.activities);

    useEffect(() => {
        dispatch(getAllActivities());
    }, [dispatch]);

    return(
        <div>
            <select>
                <option value='All'>Orden alfabético</option>
                <option value='Asc'>Ascendente</option>
                <option value='Des'>Descendente</option>
            </select>
            <select>
                <option value='All'>Orden poblacional</option>
                <option value='May'>Mayor población</option>
                <option value='Men'>Menor población</option>
            </select>
            <select>
                <option value='All'>Continente</option>
                <option value='Americas'>América</option>
                <option value='Africa'>África</option>
                <option value='Europe'>Europa</option>
                <option value='Asia'>Asia</option>
                <option value='Oceania'>Oceanía</option>
                <option value='Antarctic'>Antártida</option>
            </select>
            <select>
                <option value='All'>Actividades</option>
                {   
                    allActivities && allActivities.map(activity => {
                        return <option value={activity.name} key={activity.id}>{activity.name}</option>
                        
                    })
                }
            </select>
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