import React from 'react';

const PinCard = (props) => {
    return (
        <div classname="pin-preview">
            <img src={props.img} alt="your memory" className="user-image" />
            <h3>{props.location}</h3>
            <h4>{props.caption}</h4>
        </div>
    )
}

export default PinCard;