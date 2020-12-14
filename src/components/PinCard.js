import React from 'react';

const PinCard = (props) => {
    return (
        <div>
            <img src={props.img} alt="your memory" />
            {props.location}
            {props.caption}
        </div>
    )
}

export default PinCard;