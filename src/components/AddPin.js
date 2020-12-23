import React from 'react';
import { withRouter } from 'react-router';

class AddPin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            img: '',
            location: '',
            caption: ''
        }
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        let pin = {
            img: this.state.img,
            location: this.state.location,
            caption: this.state.caption,
            userId: this.props.userID,
            xPerc: this.props.xPerc,
            yPerc: this.props.yPerc
        }
        event.preventDefault();
        this.props.addAPin(pin);
        this.redirect()
    }

    redirect = () => {
        this.props.history.push('/pins')
    }

    render() {
        return ( 
            <form onSubmit={this.handleSubmit} id="add-pin-form">
                <h3>Add a Memory:</h3>
                <input type="text" name="img" placeholder="link your image here" onChange={this.handleChange} required/><br />
                <input type="text" name="location" placeholder="location (eg: Paris, FR)" onChange={this.handleChange} required/><br />
                <input type="text" name="caption" placeholder="caption" onChange={this.handleChange} required/><br />
                <input type="submit" value="Add"/>
            </form>
        )
    }

}

export default withRouter(AddPin);