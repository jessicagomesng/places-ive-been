import React from 'react';
import { Link } from 'react-router-dom'

const PinShow = ({match, pins}) => {
    let pin = pins.find((pin) => pin.id == match.params.pinId)
    return (
        <div>
            <img src={pin.img} alt="your memory" className="user-image"/>
            <h3>{ pin.location }</h3>
            <h4>{ pin.caption }</h4>
            <Link to={`${match.url}/edit`}>Edit/Delete Pin</Link><br />

            <button onClick={() => window.scrollTo(0,0)} id="scroll-up" title="Go to top">^</button>
        </div>
    )
}

export default PinShow;