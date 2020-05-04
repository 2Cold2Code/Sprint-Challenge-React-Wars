import React from 'react';

export default function Name(props){
    const {name} = props;
    
    return (
        <h1 name={props}>{name}</h1>
    )
}