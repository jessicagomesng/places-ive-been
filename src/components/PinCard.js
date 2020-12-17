import React from 'react';

const PinCard = (props) => {
    return (
        <div>
            <img src={props.img} alt="your memory" className="user-image" />
            <h3>{props.location}</h3>
            <h4>{props.caption}</h4>
        </div>
    )
}

export default PinCard;