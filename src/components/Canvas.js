import React, { useRef } from 'react'
import AddPin from './AddPin'
import axios from 'axios'

// Navigate to view existing pins
// Click add a pin to be taken to this canvas where the pin is shown on the page & a form is displayed 
// When the form is submitted, it should submit a post request to the server & then redirect the user to the existing pins map
// On this map, they can hover over each pin to view information about it 

// When I add a pin, it should display a form, then send a post request to the server
// I want to be able to click a pin and a form will display for that to be deleted.
// Canvas, on load, should fetch all existing pins and display those
// Click on a pin to see information about it (takes you to the show page) 

class Canvas extends React.Component {
    constructor(props) {
        super(props)
        this.canvasRef = React.createRef();
        this._onMarkerAdd = this._onMarkerAdd.bind(this);
        this.state = {
            showComponent: false
        }
    }

    _onMarkerAdd() {
        this.setState({
            showComponent: true
        })
    }

    componentDidMount() {
        const canvas = this.canvasRef.current 
        const context = canvas.getContext('2d')
        let newMap = new Image();
        newMap.src = "https://simplemaps.com/static/demos/resources//svg-library/svgs/europe.svg";
        context.fillStyle="#FFF";
        context.fillRect(0, 0, canvas.width, canvas.height);
        newMap.onload = function() {
            context.drawImage(newMap, 0, 0, 1000, 684)
        }

        canvas.addEventListener('click', function(event) {
            var rect = canvas.getBoundingClientRect();
            var mouseXPos = (event.clientX - rect.left);
            var mouseYPos = (event.clientY - rect.top);
            console.log(event.clientX, event.clientY)
            console.log(rect)
    
            // console.log(mouseXPos, mouseYPos)

            // let newMap = new Image();
            // newMap.src = "https://simplemaps.com/static/demos/resources//svg-library/svgs/europe.svg";
            // context.fillStyle="#FFF";
            // context.fillRect(0, 0, canvas.width, canvas.height)
            // context.drawImage(newMap, 0, 0, 700, 700)

            let tempMarker = new Image();
            tempMarker.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1200px-Empty_Star.svg.png";
            let x = mouseXPos - 15;
            let y = mouseYPos - 15;

            tempMarker.onload = function() {
                context.drawImage(tempMarker, x, y, 30, 30);
            }
            // tempMarker.xPos = mouseXPos-6;
            // tempMarker.yPos = mouseYPos-20;

            // context.font = "15px times"
            // context.textAlign = "center";


            let markerText = `${x}, ${y}`

            const textMeasurements = context.measureText(markerText);
            context.fillStyle="#666";
            context.globalAlpha = 0;
            context.fillRect(x - (textMeasurements.width / 2), y - 15, textMeasurements.width, 20);
            context.globalAlpha = 1;
            
            context.fillStyle = '#000';
            context.fillText(markerText, x, y)
        })
    }

    // handleClick = (event, canvas) => {
    //     var rect = canvas.getBoundingClientRect();
    //     console.log(rect);
    //     var mouseXPos = (event.clientX - rect.left);
    //     var mouseYPos = (event.clientY - rect.top);

    //     console.log("Marker added");

    //     let marker = { src: "http://www.clker.com/cliparts/w/O/e/P/x/i/map-marker-hi.png", width: "12", height: "20", xPos: mouseXPos-6, yPos: mouseYPos-20};

    //     this.setState({
    //         markers: [...this.state.markers, marker]
    //     })
    // }

    // componentDidMount() {
    //     const canvas = this.canvasRef.current 
    //     const context = canvas.getContext('2d')

    //     let frameCount = 0 
    //     let animationFrameId

    //     const render = () => {
    //         frameCount++ 
    //         // this.draw(context, frameCount)
    //         this.props.draw(context, frameCount)
    //         animationFrameId = window.requestAnimationFrame(render)
    //     }
    //     render() 

    //     return () => {
    //         window.cancelAnimationFrame(animationFrameId)
    //     }
    //     // this.draw(context)
    //     // context.fillStyle = '#000000'
    //     // context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    // }

    // handleClick = (event) => {
    //     let rect = canvas.getBoundingClientRect();
    //     let mouseXPos = (event.clientX - rect.left);
    //     let mouseYPos = (event.clientY - rect.top);

    //     console.log("Marker added");

    //     <Marker xPos={mouseXPos} yPos={mouseYPos}/>
    // }

    // main = () => {
    //     drawTwo();
    // }

    // drawTwo = (context, canvas) => {
    //     context.fillStyle = '#000000';
    //     context.fillRect(0, 0, canvas.width, canvas.height)
        
    // }

    render() {
        return (
            <div id='map-container'>
                <canvas ref={this.canvasRef} {...this.props} id="Canvas" width="1000" height="684" onClick={this._onMarkerAdd}/>
                {this.state.showComponent ? <AddPin addAPin={this.props.addAPin} userID={this.props.userID} />
                    // {/* <form>
                    //     <h3>Add a Memory:</h3>
                    //     <input type="text" name="img" placeholder="link your image here" />
                    //     <input type="text" name="location" placeholder="location (eg: Paris, FR)" />
                    //     <input type="text" name="caption" placeholder="caption" />
                    //     <input type="submit" value="Add"/>
                    // </form> */}
                : null }
            </div>
        )
    }

}
// // const Canvas = (props) => {

// //     const canvasRef = useRef(null)

// //     useEffect(() => {
// //         const canvas = canvasRef.current
// //         const context = canvasRef.getContext('2d')

// //         context.fillStyle = '#000000'
// //         context.fillRect(0, 0, context.canvas.width, context.canvas.height )

// //     }, []) 


// //     return <canvas ref={canvasRef} {...props} />

// // }

export default Canvas;

// import React from 'react';
// import useCanvas from './useCanvas'

// const Canvas = props => {

//     const { draw, ...rest } = props
//     const canvasRef = useCanvas(draw)

//     return <canvas ref={canvasRef} {...rest} />
// }

// export default Canvas;