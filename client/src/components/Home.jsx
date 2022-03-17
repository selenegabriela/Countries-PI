import React from 'react';
import Filter from './Filter';
import Paginator from './Paginator';
import SearchBar from './SearchBar';


export default function Home(){
    
    return(
        <div>
            <Filter />
            <SearchBar />
            <Paginator />
        </div>
    )
}