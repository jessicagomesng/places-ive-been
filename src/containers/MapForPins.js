// this should be functional 
import React from 'react';
import { Route, Link } from 'react-router-dom';
import Country from '../components/Country.js'
import CountryList from '../components/CountryList'

class MapForPins extends React.Component {
    // fetch request to countries index & get all countries 
    // if country.users includes the user id, then add an attribute to the rendered path that says "visited" or something

    componentDidMount() {
        this.props.fetchCountries()
    }

    renderCountries() {
        return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="684" fill="#ececec" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" version="1.2">
                { this.props.map.countries.map( (country) => {
                    // let status;
                    // this.props.user.countries.find((userCountry) => userCountry.id === country.id) ? status = 'visited' : status = 'unvisited';
                    return <path key={country.id} d={country.path} id={country.abbreviation} name={country.name} status="unvisited"/>
                } )}
                {/* { this.props.map.countries.map((country) => { return <Country key={country.id} country={country} userID={this.props.user.id} visitCountry={this.props.visitCountry} />})} */}
                {/* { this.props.map.countries.map((country) => { return <path key={country.id} d={country.path} id={country.abbreviation} name={country.name} />})} */}
                <circle cx="399.9" cy="390.8"></circle>
                <circle cx="575.4" cy="412"></circle>
                <circle cx="521" cy="266.6"></circle>
            </svg> 
        </div>)
    }
    
    render() {
        return (
            <>
                {this.renderCountries()}
            </>
        )
    }
}

export default MapForPins;