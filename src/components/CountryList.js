import React from 'react';

// class CountryList extends React.Component {
//     render() {
//         let { countries } = this.props;
//         debugger;
//         return (
//             <ul>
//                 {countries.map( (country) => { return <li>{country.name}</li> })}
//             </ul>
//         )
//     }
// }

const CountryList = (props) => {
    let { countries } = props;

    return (
    <ul>
        {countries.map( (country) => { return <li key={country.id}>{country.name}</li> })}
    </ul>
    )
}

export default CountryList;