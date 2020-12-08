import React from 'react';
import '../country.css';

const Country = (props) => {
    return (
        <path d={props.country.path} id={props.country.abbreviation} name={props.country.name} className={props.status} onClick={() => {props.visitCountry(props.userID, props.country.id)}}>
        </path>
    )
}

export default Country;