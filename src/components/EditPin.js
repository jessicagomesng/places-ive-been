import React from 'react';
import { withRouter } from 'react-router'

class EditPin extends React.Component {
    state = {
        img: '',
        caption: '',
        location: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let pin = Object.assign({}, this.state, {id: this.props.match.params.pinId})
        this.props.editPin(pin)
        this.props.history.push(`/pins/${pin.id}`)
    }

    handleDelete = (event) => {
        event.preventDefault();
        this.props.deletePin(this.props.match.params.pinId)
        this.props.history.push('/pins')
    }
    
    componentDidMount() {
        // find specific pin in collection from URL parameters 
        let pin = this.props.pins.find((pin) => pin.id == this.props.match.params.pinId)
        // set state to display pin's old data
        this.setState({
            img: pin.img,
            caption: pin.caption,
            location: pin.location
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} id="edit-pin">
                <input type="text" name="img" value={this.state.img} onChange={this.handleChange} /><br />
                <input type="text" name="caption" value={this.state.caption} onChange={this.handleChange} /><br />
                <input type="text" name="location" value={this.state.location} onChange={this.handleChange} /><br />
                <input type="submit" value="Edit Pin" />
                <button onClick={this.handleDelete}>Delete</button>
            </form>
        )
    }
}

export default withRouter(EditPin);