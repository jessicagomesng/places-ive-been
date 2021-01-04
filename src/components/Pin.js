import React from 'react';
import pin from '../css/images/pin.png'
import { Link } from 'react-router-dom';

const Pin = ({id, xPerc, yPerc}) => {
    return (
        <Link to ={`/pins/${id}`} >
            <img src={pin} style={{position: 'absolute', left: xPerc * 100 + "%", top: yPerc * 100 + "%", width: "1%", height: "4%"}} alt="pin" onClick={window.scrollTo(0, document.body.scrollHeight)} className="pin" /> 
        </Link>
    )
}

export default Pin;
