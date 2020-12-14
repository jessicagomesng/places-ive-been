// Navigate to view existing pins
// Click add a pin to be taken to this canvas where the pin is shown on the page & a form is displayed 
// When the form is submitted, it should submit a post request to the server & then redirect the user to the existing pins map
// On this map, they can hover over each pin to view information about it 

// When I add a pin, it should display a form, then send a post request to the server
// I want to be able to click a pin and a form will display for that to be deleted.
// Canvas, on load, should fetch all existing pins and display those
// Click on a pin to see information about it (takes you to the show page) 
import React from 'react';
import '../country.css';
import Pin from '../components/Pin'
import PinShow from '../components/PinShow'
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
        // this.props.fetchCountries()
        this.props.fetchPins(this.props.user.id)
        window.scrollTo(0, 0);
        let rect = this.mapRef.current.getBoundingClientRect();

        this.setState({
            rect: rect,
            displayPins: true
        })
        // debugger;

        // fetch pins 
        // let rect = this.mapRef.current.getBoundingClientRect();

        // const renderPins = () => {
        //     return (
        //         // change the rendering of this...
        //         <div>
        //             {this.props.pins.pins.map( (pin) => { 
        //                 let x = (pin.xCoord * rect.width) + rect.left
        //                 let y = (pin.yCoord * rect.height) + rect.top
        //                 return <Pin key={pin.id} xCoord={x} yCoord={y} caption={pin.caption} img={pin.img}/>
        //             }
        //             )}
        //         </div>
        //     )
        // }

        // renderPins()
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.map !== this.props.map) {
    //         this.renderPins()
    //     }
    // }

    render() {
        return (
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="684" fill="#ececec" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" version="1.2" ref={this.mapRef}>
                    { this.props.map.countries.map( (country) => {
                        let status;
                        this.props.user.countries.find((userCountry) => userCountry.id === country.id) ? status = 'visited' : status = 'unvisited';
                        return <path key={country.id} d={country.path} id={country.abbreviation} name={country.name} className={status}/>
                    } )}
                    {/* { this.props.map.countries.map((country) => { return <Country key={country.id} country={country} userID={this.props.user.id} visitCountry={this.props.visitCountry} />})} */}
                    {/* { this.props.map.countries.map((country) => { return <path key={country.id} d={country.path} id={country.abbreviation} name={country.name} />})} */}
                    <circle cx="399.9" cy="390.8"></circle>
                    <circle cx="575.4" cy="412"></circle>
                    <circle cx="521" cy="266.6"></circle>
                </svg>

                {this.state.displayPins && this.renderPins()}
                <Route path={`${this.props.match.url}/:pinId`} render={routerProps => <PinShow {...routerProps} pins={this.props.pins.pins} />} />
            </div>
        )

        // if (this.props.pins.loading === true) {
        //     return (<div>Loading pins...
        //         <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="684" fill="#ececec" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" version="1.2" ref={this.mapRef}>
        //             { this.props.map.countries.map( (country) => {
        //                 let status;
        //                 this.props.user.countries.find((userCountry) => userCountry.id === country.id) ? status = 'visited' : status = 'unvisited';
        //                 return <path key={country.id} d={country.path} id={country.abbreviation} name={country.name} className={status}/>
        //             } )}
        //             {/* { this.props.map.countries.map((country) => { return <Country key={country.id} country={country} userID={this.props.user.id} visitCountry={this.props.visitCountry} />})} */}
        //             {/* { this.props.map.countries.map((country) => { return <path key={country.id} d={country.path} id={country.abbreviation} name={country.name} />})} */}
        //             <circle cx="399.9" cy="390.8"></circle>
        //             <circle cx="575.4" cy="412"></circle>
        //             <circle cx="521" cy="266.6"></circle>
        //         </svg></div>)
        // } else {
        //     return (
        //     <div>
        //         <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="684" fill="#ececec" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" version="1.2" ref={this.mapRef}>
        //             { this.props.map.countries.map( (country) => {
        //                 let status;
        //                 this.props.user.countries.find((userCountry) => userCountry.id === country.id) ? status = 'visited' : status = 'unvisited';
        //                 return <path key={country.id} d={country.path} id={country.abbreviation} name={country.name} className={status}/>
        //             } )}
        //             {/* { this.props.map.countries.map((country) => { return <Country key={country.id} country={country} userID={this.props.user.id} visitCountry={this.props.visitCountry} />})} */}
        //             {/* { this.props.map.countries.map((country) => { return <path key={country.id} d={country.path} id={country.abbreviation} name={country.name} />})} */}
        //             <circle cx="399.9" cy="390.8"></circle>
        //             <circle cx="575.4" cy="412"></circle>
        //             <circle cx="521" cy="266.6"></circle>
        //         </svg>
    
        //         {this.props.pins.pins.map( (pin) => { 
        //         let rect = this.mapRef.current.getBoundingClientRect();
        //         let x = (pin.xCoord * rect.width) + rect.left
        //         let y = (pin.yCoord * rect.height) + rect.top
        //         return <Pin key={pin.id} xCoord={x} yCoord={y} caption={pin.caption} img={pin.img}/>
        //         }
        //         )}
        //     </div>)
        // }

        // return (
        // <div>
        //     <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="684" fill="#ececec" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.1" version="1.2" ref={this.mapRef}>
        //         { this.props.map.countries.map( (country) => {
        //             let status;
        //             this.props.user.countries.find((userCountry) => userCountry.id === country.id) ? status = 'visited' : status = 'unvisited';
        //             return <path key={country.id} d={country.path} id={country.abbreviation} name={country.name} className={status}/>
        //         } )}
        //         {/* { this.props.map.countries.map((country) => { return <Country key={country.id} country={country} userID={this.props.user.id} visitCountry={this.props.visitCountry} />})} */}
        //         {/* { this.props.map.countries.map((country) => { return <path key={country.id} d={country.path} id={country.abbreviation} name={country.name} />})} */}
        //         <circle cx="399.9" cy="390.8"></circle>
        //         <circle cx="575.4" cy="412"></circle>
        //         <circle cx="521" cy="266.6"></circle>
        //     </svg>

        //     {this.props.pins.pins.map( (pin) => { 
        //     let rect = this.mapRef.current.getBoundingClientRect();
        //     let x = (pin.xCoord * rect.width) + rect.left
        //     let y = (pin.yCoord * rect.height) + rect.top
        //     return <Pin key={pin.id} xCoord={x} yCoord={y} caption={pin.caption} img={pin.img}/>
        //     }
        //     )}
        // </div>)
    }

    renderPins() {
        return (
            // change the rendering of this...
            // <div>
            //     {this.props.pins.pins.map( (pin) => { 
            //         return <Pin key={pin.id} xCoord={pin.xCoord} yCoord={pin.yCoord} caption={pin.caption} img={pin.img}/>
            //     }
            //     )}
            // </div>

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
    
    // render() {
    //     return (
    //         <>
    //             {this.renderCountries()}
    //             {/* {this.renderPins()} */}
    //         </>
    //     )
    // }
}

export default Pins;

