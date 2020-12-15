import React from 'react';
import { Link } from 'react-router-dom'

const PinShow = ({match, pins}) => {
    let pin = pins.find((pin) => pin.id == match.params.pinId)
    return (
        <div>
            <img src={pin.img} alt="your memory" />
            <h3>{ pin.location }</h3>
            <h4>{ pin.caption }</h4>
            link to edit and delete 
            <Link to={`${match.url}/edit`}>Edit</Link> 
        </div>
    )
}

export default PinShow;