import React from 'react';
import './TodoSearch.css';

export function TodoSearch({ searchValue, setSearchValue }) {
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
    }
    
    return (
        <>
            <input 
                onChange={onSearchValueChange}
                value={searchValue}
                className="TodoSearch" 
                placeholder="Cebolla" 
            />
            
            <span>{searchValue}</span>
        </>
    )
}
