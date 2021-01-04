import React from 'react';
import VotePin from './VotePin'
import { Link } from 'react-router-dom'

const PinShow = ({match, pins}) => {
    // find specific pin in collection from URL parameters 
    let pin = pins.find((pin) => pin.id === parseInt(match.params.pinId))
    return (
        <div>
            <img src={pin.img} alt="your memory" className="user-image"/>
            <h3>{ pin.location }</h3>
            <h4>{ pin.caption }</h4>
            <Link to={`${match.url}/edit`}>Edit/Delete Pin</Link><br />
            <VotePin /> 
            <button onClick={() => window.scrollTo(0,0)} id="scroll-up" title="Go to top">^</button>
        </div>
    )
}

export default PinShow;