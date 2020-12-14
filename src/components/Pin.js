import React from 'react';
import PinCard from './PinCard';
import { Link, Route } from 'react-router-dom';

class Pin extends React.Component {
    constructor(props) {
        super(props)
        this.imgRef = React.createRef();
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this._onButtonClick = this._onButtonClick.bind(this);
        this.state = {
            isHovering: false,
            showComponent: false
        }
    }

    componentDidMount() {
        this.positionMarker()
    }

    _onButtonClick() {
        this.setState({ showComponent: true })
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        }
    }

    positionMarker() {
        let img = this.imgRef.current;
        img.style.position = "absolute";
        img.style.left = this.props.xCoord + 'px';
        img.style.top = this.props.yCoord + 'px';
    }

    // handleClick() {
    //     debugger;
    //     return (
    //         <form>
    //             <input type="text" name="caption" placeholder="caption here" />
    //         </form>
    //     )
    // }

    render() {
        return (
        <div>
            <div>
                <Link to={`/pins/${this.props.id}`} ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1200px-Empty_Star.svg.png" width='30' height='30' alt="pin" ref={this.imgRef} onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} onClick={this._onButtonClick}/></Link>
            </div>
            {/* { this.state.isHovering && <div>Hovering right meow!</div> } */}
            {this.state.isHovering && <PinCard caption={this.props.caption} img={this.props.img}/>}
            <Route path={`${match.url}/:pinId`} render={<PinCard caption={this.props.caption} img={this.props.img}/>} />
        </div>
        )
    }
}

export default Pin;