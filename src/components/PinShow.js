import React from 'react';

const PinShow = ({match, pins}) => {
    let pin = pins[match.params.pinId - 1]
    return (
        <div>
            <img src={pin.img} alt="your memory" />
            <h3>{ pin.location }</h3>
            <h4>{ pin.caption }</h4>
        </div>
    )
}

export default PinShow;