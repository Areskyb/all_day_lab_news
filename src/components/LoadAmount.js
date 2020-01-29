import React, { Component } from 'react';

const LoadAmount = (props) => {
   
    function handleSelect(event){
        props.onLoadChange(event.target.value);

    }
    
    
    return(
        
        <select defaultValue="morgaine" onChange = {handleSelect}>
            <option disabled value="morgaine" >select amount to display</option>
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="400">400</option>


        </select>
    )
}

export default LoadAmount;