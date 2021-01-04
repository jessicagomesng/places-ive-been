import React, { useState } from 'react';

// const VotePin = () => {

//     const [counter, setCounter] = useState(0);
    
//     return (
//         <div>
//             <button onClick={() => setCounter(counter + 1)} className="like">&#10084;&#65039;</button>
//             <button onClick={() => setCounter(counter - 1)} className="like">&#128148;</button> 
//             <p>{counter}</p>
//         </div>
//     )

// }

class VotePin extends React.Component {

    constructor() {
        super();
        this.handleUpvoteChange = this.handleUpvoteChange.bind(this);
        this.handleDownvoteChange = this.handleDownvoteChange.bind(this);
        this.state = {
            counter: 0
        }
    }

    handleUpvoteChange() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    handleDownvoteChange() {
        if (this.state.counter > 0) {
            this.setState({
                counter: this.state.counter - 1
            })
        }
    }

    // callApi = () => {
    //     console.log('a')
    //     fetch(`http://localhost:3001/users/1/pifdfdsfsdns`, { credentials: 'include' })
    //     .then(response => { 
    //         if (response.ok) {
    //             console.log(response, 'b')
    //             return response.json()
    //         } else {
    //             throw new Error
    //         }
           
    //     })
    //     .then(responseJSON => {
    //         console.log('c', responseJSON);
    //     })
    //     .catch(e => console.log('d', e))
    //     console.log('e')
    // }

    render() {
        return (
            <div>
                <button onClick={this.callApi} className="like">&#10084;&#65039;</button>
                <button onClick={this.handleDownvoteChange} className="like">&#128148;</button> 
                <p>{this.state.counter}</p>
            </div>
        )
    }
}

export default VotePin;
