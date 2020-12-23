import React from 'react';
import pin from '../css/images/pin.png'
import { Link } from 'react-router-dom';

class Pin extends React.Component {
    constructor(props) {
        super(props)
        this.imgRef = React.createRef();
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    componentDidMount() {
        this.positionMarker()
    }

    _onButtonClick() {
        window.scrollTo(0,document.body.scrollHeight);
    }

    positionMarker() {
        // position pin once component has mounted and reference has been established
        let img = this.imgRef.current;
        img.style.position = "absolute";
        img.style.left = this.props.xPerc * 100 + "%";
        img.style.top = this.props.yPerc * 100 + "%";
    }

    render() {
        return (
            <>
                <Link to={`/pins/${this.props.id}`} ><img src={pin} style={{width: "1%", height: "4%"}} alt="pin" ref={this.imgRef} onClick={this._onButtonClick} className="pin"/></Link>
            </>
        )
    }
}

export default Pin;