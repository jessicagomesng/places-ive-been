import React from 'react';

const CountryList = (props) => {
    let { countries } = props;

    return (
    <ul>
        {countries.map( (country) => { return <li key={country.id}>{country.name}</li> })}
    </ul>
    )
}

export default CountryList;