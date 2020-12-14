import React, { useEffect, useRef } from 'react';

const TempMarker = (props) => {

    const imageRef = useRef(null);

    useEffect(() => {
        const image = imageRef.current
        // image.style.position = 'absolute'
        // image.style.top = props.yCoord
        // image.style.left = props.xCoord
    }) 

    return (
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1200px-Empty_Star.svg.png' width='30' height='30' style={`position: absolute; top: ${props.yCoord}px; left: ${props.xCoord}px`} ref={imageRef}/>
    )
}


export default TempMarker;