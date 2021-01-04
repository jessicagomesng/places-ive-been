import React from 'react';
import Pin from '../components/Pin'
import PinShow from '../components/PinShow'
import EditPin from '../components/EditPin'
import { Route } from 'react-router-dom';

class Pins extends React.Component { 
    constructor(props) {
        super(props)
        this.containerRef = React.createRef();
        this.renderPins = this.renderPins.bind(this);
        this.state = {
            displayPins: false
        }
    }

    componentDidMount() {
        this.props.fetchCountries()
        this.props.fetchPins(this.props.user.id)
        console.log(this.props.pins)
        this.setState({
            displayPins: true
        })
    }

    render() {
        const { map, user, pins, editPin, deletePin, match } = this.props 
        return (
            <div>
                <p className="instruction">Click on a pin to view/edit/delete your memory!</p>
                <div className="add-pin-container" ref={this.containerRef}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 684" preserveAspectRatio="xMidYMid meet"  fill="#ececec" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.2" version="1.2">
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
                    // render pins for each pin in collection
                    return <Pin key={pin.id} id={pin.id} xPerc={pin.xPerc} yPerc={pin.yPerc}/>
                }
                )}
            </>
        )
    }
}

export default Pins;

