import React from 'react';

const Country = (props) => {
    return (
        <path d={props.country.path} id={props.country.abbreviation} name={props.country.name} className={`${props.status} main-map`} onClick={() => {props.visitCountry(props.userID, props.country.id)}}>
        </path>
    )
}

export default Country;