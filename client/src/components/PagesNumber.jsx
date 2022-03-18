import React from "react";


export default function PagesNumber(props) {

    const { countriesLength, countriesPerPage, setPageNumber } = props;

    const allPages = [];
    
    for(let i = 1; i <= Math.ceil(((countriesLength-9) / countriesPerPage)) + 1; i++){
        allPages.push(i)
    }

    

    return (<ul>
    {
        
        allPages && allPages.map(pageNumber => {
            return <li key={pageNumber}><button onClick={() => setPageNumber(pageNumber)}>{pageNumber}</button></li>
        })
    }
    </ul>)
}