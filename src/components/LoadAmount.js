import React, { Component } from 'react';

const LoadAmount = (props) => {
    
    
    return(
        
        <select defaultValue="morgaine">
            <option disabled value="morgaine">select amount to display</option>
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
        </select>
    )
}

export default LoadAmount;