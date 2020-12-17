import React from 'react';
import PinCard from './PinCard';
import pin from '../css/images/pin.png'
import { Link } from 'react-router-dom';

class Pin extends React.Component {
    constructor(props) {
        super(props)
        this.imgRef = React.createRef();
        // this.handleMouseHover = this.handleMouseHover.bind(this);
        this._onButtonClick = this._onButtonClick.bind(this);
        this.state = {
            // isHovering: false,
            showComponent: false
        }
    }

    componentDidMount() {
        this.positionMarker()
    }

    _onButtonClick() {
        this.setState({ showComponent: true })
        window.scrollTo(0,document.body.scrollHeight);
    }

    // handleMouseHover() {
    //     this.setState(this.toggleHoverState);
    // }

    // toggleHoverState(state) {
    //     return {
    //         isHovering: !state.isHovering,
    //     }
    // }

    positionMarker() {
        let img = this.imgRef.current;
        img.style.position = "absolute";
        img.style.left = this.props.xCoord + 'px';
        img.style.top = this.props.yCoord + 'px';
    }

    render() {
        return (
        <div className="preview">
            <div>
                {/* <Link to={`/pins/${this.props.id}`} ><img src={pin} alt="pin" ref={this.imgRef} onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} onClick={this._onButtonClick} className="pin"/></Link> */}
                <Link to={`/pins/${this.props.id}`} ><img src={pin} alt="pin" ref={this.imgRef} onClick={this._onButtonClick} className="pin"/></Link>
            </div>
            {/* {this.state.isHovering && <PinCard caption={this.props.caption} img={this.props.img} location={this.props.location}/>} */}
        </div>
        )
    }
}

export default Pin;