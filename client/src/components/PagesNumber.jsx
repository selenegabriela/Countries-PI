import React from "react";
import s from './PagesNumber.module.css'


export default function PagesNumber(props) {

    const { countriesLength, countriesPerPage, setPageNumber } = props;
    
    const allPages = [];
    if(countriesLength){

        for(let i = 1; i <= Math.ceil(((countriesLength-9) / countriesPerPage)) + 1; i++){ 
            allPages.push(i)
        }
    }


    console.log(allPages)

    return (<ul className={`${s.contenedor} ${s.ul}`}>
    {
        
        allPages.length ? allPages.map(pageNumber => {
            return <li key={pageNumber}><button className={s.btn} onClick={() => setPageNumber(pageNumber)}>{pageNumber}</button></li> 
        }) : ''// <label htmlFor="">No se puede ordenar lo que no existe 🙄</label>
    }
    </ul>)
}