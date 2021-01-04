// this should be functional 
import React from 'react';
import { Route, Link } from 'react-router-dom';
import Country from '../components/Country.js'
import CountryList from '../components/CountryList';


const Map = (props) => {
    const { fetchCountries } = props;

    React.useEffect( () => {
        fetchCountries();
    }, [fetchCountries])

    if (props.map.loading) { 
        return (
            <p className="instruction">Loading Countries...</p>
        )
    } else {
        return (
        <div>
            <p className="instruction">Click on a country to mark that you've visited it!</p>
            <div id="country-list">
                <Route path={`${props.match.url}/mycountries`}>
                    <CountryList countries={props.user.countries} />
                </Route>
                {props.location.pathname === '/map/mycountries' ? <Link to="/map">Hide My Countries</Link> : <Link to="/map/mycountries">See My Countries</Link>}
            </div>
            
            <div className="map-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 684" preserveAspectRatio="xMidYMid meet" fill="#ececec" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.2" version="1.2" id="map">
                    { props.map.countries.map( (country) => {
                        let status;
                        props.user.countries.find((userCountry) => userCountry.id === country.id) ? status = 'visited' : status = 'unvisited';
                        return <Country key={country.id} country={country} userID={props.user.id} visitCountry={props.visitCountry} status={status} />
                    } )}
                    <circle cx="399.9" cy="390.8"></circle>
                    <circle cx="575.4" cy="412"></circle>
                    <circle cx="521" cy="266.6"></circle>
                </svg> 
            </div>

        </div>
        )
    }
}

export default Map;