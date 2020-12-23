import React from 'react';
import AddPin from '../components/AddPin'
import pin from '../css/images/pin.png'

class AddPinMap extends React.Component {
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
        // set x and y coordinates of temporary marker by minusing 1/2 of the marker's width and the marker's height 
        this.setState({
            showImage: true,
            xCoord: event.pageX - 7.5,
            yCoord: event.pageY - 39.55
        })
        // // scroll to bottom of page to access form
        window.scrollTo(0,document.body.scrollHeight);
        console.log(event.clientX, event.clientY)
        console.log(event.pageX, event.pageY)
    }


    componentDidMount() {
        this.props.fetchCountries()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.xCoord !== prevState.xCoord) {
            // calculate distance between map and window
            const outerRect = this.mapRef.current.getBoundingClientRect();

            if (this.markerRef.current) {
                // calculate distance between pin and window
                const innerRect = this.markerRef.current.getBoundingClientRect();
                // calculate distance between pin and map top border
                let topDiff = innerRect.top - outerRect.top 
                // calculate distance between pin and map left border
                let leftDiff = innerRect.left - outerRect.left 
                // calculate % top/left distances of map for accurate pin placement
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
        let { map, user, addAPin } = this.props
        return (
            <div>
                <p className="instruction">Click anywhere on the map to place your pin, then fill in the form to create your memory!</p>
                <div className="add-pin-container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 684" preserveAspectRatio="xMidYMid meet"  fill="#ececec" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.2" version="1.2" onMouseDown={this._handleClick} ref={this.mapRef} id="add-pin-map">
                        { map.countries.map( (country) => {
                            let status;
                            user.countries.find((userCountry) => userCountry.id === country.id) ? status = 'visited add-pin' : status = 'unvisited add-pin';
                            return <path key={country.id} d={country.path} id={country.abbreviation} name={country.name} className={status}/>
                        } )}
                        <circle cx="399.9" cy="390.8"></circle>
                        <circle cx="575.4" cy="412"></circle>
                        <circle cx="521" cy="266.6"></circle>
                    </svg> 
                    
                    {/* render a temporary pin marker where the user clicked */}
                    {this.state.showImage ? <img src={pin} style={{position: 'absolute', top: this.state.yCoord + 'px', left: this.state.xCoord + 'px', width: "1%"}} ref={this.markerRef} className="pin" alt="temporary pin"/> : null }
                </div>
                {/* display the add pin form on click */}
                {this.state.showForm ? <AddPin addAPin={addAPin} userID={user.id} xPerc={this.state.xPerc} yPerc={this.state.yPerc} /> : null}
            </div>
        )
    }
}

export default AddPinMap;