import React from 'react';
import Pin from '../components/Pin'
import PinShow from '../components/PinShow'
import EditPin from '../components/EditPin'
import { Route } from 'react-router-dom';

const Pins = (props) => {

    const { map, user, pins, editPin, deletePin, match } = props 

    return (
        <div>
            <p className="instruction">Click on a pin to view/edit/delete your memory!</p>
            <div className="add-pin-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 684" preserveAspectRatio="xMidYMid meet"  fill="#ececec" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.2" version="1.2">
                    { map.countries.map( (country) => {
                        let status;
                        user.countries.find((userCountry) => userCountry.id === country.id) ? status = 'visited' : status = 'unvisited';
                        return <path key={country.id} d={country.path} id={country.abbreviation} name={country.name} className={status}/>
                    } )}
                    <circle cx="399.9" cy="390.8"></circle>
                    <circle cx="575.4" cy="412"></circle>
                    <circle cx="521" cy="266.6"></circle>
                </svg>

                {pins.pinCollection.map( (pin) => { 
                    // render pins for each pin in collection
                    return <Pin key={pin.id} id={pin.id} xPerc={pin.xPerc} yPerc={pin.yPerc}/>
                    }
                )}

            </div>
            <Route path={`${match.url}/:pinId`} render={routerProps => <PinShow {...routerProps} pins={pins.pinCollection}  /> } />
            <Route path={`${match.url}/:pinId/edit`} render={routerProps => <EditPin {...routerProps} pins={pins.pinCollection} editPin={editPin} deletePin={deletePin} /> } />
        </div>
    )

}

export default Pins;
