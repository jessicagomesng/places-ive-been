import React from 'react';
import Pin from '../components/Pin'
import PinShow from '../components/PinShow'
import EditPin from '../components/EditPin'
import { Route } from 'react-router-dom';

class Pins extends React.Component { 
    constructor(props) {
        super(props)
        this.mapRef = React.createRef();
        this.renderPins = this.renderPins.bind(this);
        this.state = {
            rect: null,
            displayPins: false
        }
    }

    componentDidMount() {
        this.props.fetchCountries()
        this.props.fetchPins(this.props.user.id)
        window.scrollTo(0, 0);
        let rect = this.mapRef.current.getBoundingClientRect();

        this.setState({
            rect: rect,
            displayPins: true
        })
    }

    render() {
        return (
            <div>
                <p className="instruction">Click on a pin to view/edit/delete your memory!</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="684" fill="#ececec" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.2" version="1.2" ref={this.mapRef}>
                    { this.props.map.countries.map( (country) => {
                        let status;
                        this.props.user.countries.find((userCountry) => userCountry.id === country.id) ? status = 'visited' : status = 'unvisited';
                        return <path key={country.id} d={country.path} id={country.abbreviation} name={country.name} className={status}/>
                    } )}
                    <circle cx="399.9" cy="390.8"></circle>
                    <circle cx="575.4" cy="412"></circle>
                    <circle cx="521" cy="266.6"></circle>
                </svg>

                {this.state.displayPins && this.renderPins()}
                <Route path={`${this.props.match.url}/:pinId`} render={routerProps => <PinShow {...routerProps} pins={this.props.pins.pins}  /> } />
                <Route path={`${this.props.match.url}/:pinId/edit`} render={routerProps => <EditPin {...routerProps} pins={this.props.pins.pins} editPin={this.props.editPin} deletePin={this.props.deletePin} /> } />
            </div>
        )
    }

    renderPins() {
        return (
            <>
                {this.props.pins.pins.map( (pin) => { 

                    let x = (pin.xCoord * this.state.rect.width) + this.state.rect.left 
                    let y = (pin.yCoord * this.state.rect.height) + this.state.rect.top 
                    return <Pin key={pin.id} xCoord={x} yCoord={y} caption={pin.caption} img={pin.img} location={pin.location} id={pin.id}/>
                }
                )}
            </>
        )
    }
}

export default Pins;

