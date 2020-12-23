import React from 'react';
import Pin from '../components/Pin'
import PinShow from '../components/PinShow'
import EditPin from '../components/EditPin'
import { Route } from 'react-router-dom';

class Pins extends React.Component { 
    constructor(props) {
        super(props)
        this.mapRef = React.createRef();
        this.containerRef = React.createRef();
        this.renderPins = this.renderPins.bind(this);
        // set initial state of rectangle to null
        this.state = {
            rect: null,
            displayPins: false
        }
    }

    componentDidMount() {
        this.props.fetchCountries()
        this.props.fetchPins(this.props.user.id)
        window.scrollTo(0, 0);
        let rect = this.containerRef.current.getBoundingClientRect();
        // calculate distance between map and window
        this.setState({
            rect: rect,
            displayPins: true
        })
    }

    render() {
        const { map, user, pins, editPin, deletePin, match } = this.props 
        return (
            <div>
                <p className="instruction">Click on a pin to view/edit/delete your memory!</p>
                <div className="add-pin-container" ref={this.containerRef}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 684" preserveAspectRatio="xMidYMid meet"  fill="#ececec" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.2" version="1.2" ref={this.mapRef}>
                        { map.countries.map( (country) => {
                            let status;
                            user.countries.find((userCountry) => userCountry.id === country.id) ? status = 'visited' : status = 'unvisited';
                            return <path key={country.id} d={country.path} id={country.abbreviation} name={country.name} className={status}/>
                        } )}
                        <circle cx="399.9" cy="390.8"></circle>
                        <circle cx="575.4" cy="412"></circle>
                        <circle cx="521" cy="266.6"></circle>
                    </svg>

                    {this.state.displayPins && this.renderPins()}
                </div>
                <Route path={`${match.url}/:pinId`} render={routerProps => <PinShow {...routerProps} pins={pins.pinCollection}  /> } />
                <Route path={`${match.url}/:pinId/edit`} render={routerProps => <EditPin {...routerProps} pins={pins.pinCollection} editPin={editPin} deletePin={deletePin} /> } />
            </div>
        )
    }

    renderPins() {
        return (
            <>
                {this.props.pins.pinCollection.map( (pin) => { 
                    // use % dimensions of pin coordinates to accurately place pin in browser
                    let x = (pin.xPerc * this.state.rect.width) + this.state.rect.left 
                    let y = (pin.yPerc * this.state.rect.height) + this.state.rect.top 
                    // render pins for each pin in collection
                    return <Pin key={pin.id} xCoord={x} yCoord={y} id={pin.id} xPerc={pin.xPerc} yPerc={pin.yPerc}/>
                }
                )}
            </>
        )
    }
}

export default Pins;

