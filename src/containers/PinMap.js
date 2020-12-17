import React from 'react';
import AddPin from '../components/AddPin'
import pin from '../css/images/pin.png'


class PinMap extends React.Component {
    constructor(props) {
        super(props)
        this._handleClick = this._handleClick.bind(this)
        this.mapRef = React.createRef();
        this.markerRef = React.createRef();
        this.state = {
            showForm: false,
            showImage: false,
            xCoord: '',
            yCoord: '',
            xPerc: '',
            yPerc: ''
        }
    }

    _handleClick(event) {
        this.setState({
            showImage: true,
            xCoord: event.pageX - 7.5,
            yCoord: event.pageY - 39.55
        })
        window.scrollTo(0,document.body.scrollHeight);
        console.log(event.clientX, event.clientY)
        console.log(event.pageX, event.pageY)
        console.log(this.state.showImage)
    }


    componentDidMount() {
        this.props.fetchCountries()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.xCoord !== prevState.xCoord) {
            const outerRect = this.mapRef.current.getBoundingClientRect();
            console.log(outerRect)

            if (this.markerRef.current) {
                const innerRect = this.markerRef.current.getBoundingClientRect();
                console.log(innerRect)

                let topDiff = innerRect.top - outerRect.top 
                let leftDiff = innerRect.left - outerRect.left 
        
                let leftPerc = Math.round(leftDiff/outerRect.width * 100) / 100
                let topPerc = Math.round(topDiff/outerRect.height * 100) / 100
                
                this.setState({
                    showForm: true,
                    xPerc: leftPerc,
                    yPerc: topPerc
                })
            }
        }
    }

    render() {
        return (
            <div id="map-container">
                <p class="instruction">Click anywhere on the map to place your pin, then fill in the form to create your memory!</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="684" fill="#ececec" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.2" version="1.2" onMouseDown={this._handleClick} ref={this.mapRef}>
                    { this.props.map.countries.map( (country) => {
                        let status;
                        this.props.user.countries.find((userCountry) => userCountry.id === country.id) ? status = 'visited add-pin' : status = 'unvisited add-pin';
                        return <path key={country.id} d={country.path} id={country.abbreviation} name={country.name} className={status}/>
                    } )}
                    {/* { this.props.map.countries.map((country) => { return <Country key={country.id} country={country} userID={this.props.user.id} visitCountry={this.props.visitCountry} />})} */}
                    {/* { this.props.map.countries.map((country) => { return <path key={country.id} d={country.path} id={country.abbreviation} name={country.name} />})} */}
                    <circle cx="399.9" cy="390.8"></circle>
                    <circle cx="575.4" cy="412"></circle>
                    <circle cx="521" cy="266.6"></circle>
                </svg> 
                
                {this.state.showImage ? <img src={pin} style={{position: 'absolute', top: this.state.yCoord + 'px', left: this.state.xCoord + 'px'}} ref={this.markerRef} className="pin" /> : null }
                {this.state.showForm ? <AddPin addAPin={this.props.addAPin} userID={this.props.user.id} xPerc={this.state.xPerc} yPerc={this.state.yPerc} /> : null}
                {/* What do I do? This is being created before xPerc is being set. How can I have this display only once xPerc is calculated?  */}
                
                {/* {this.state.showComponent ? <div>
                    <AddPin addAPin={this.props.addAPin} userID={this.props.user.id} />
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1200px-Empty_Star.svg.png' width='30' height='30' style={{position: 'absolute', top: this.state.yCoord + 'px', left: this.state.xCoord + 'px'}} ref={this.markerRef} />
                </div> : null } */}
                {/* { this.state.components.length !== 0 && this.state.components.map((Component, index) => <Component key={index} />)} */}
            </div>

            // <>
            // {/* <MapForPins fetchCountries={this.props.fetchCountries} map={this.props.map} /> */}
            // <Canvas addAPin={this.props.addAPin} userID={this.props.user.id}/>
            // </>
        )
    }
}

export default PinMap;