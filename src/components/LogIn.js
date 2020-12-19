// refactor as functional

import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';

class LogIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            errors: ''
        }
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {

        event.preventDefault()
        const { username, password } = this.state
        let user = {
            username: username,
            password: password
        }

        axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
        .then(response => {
            if (response.data.status === 200) {
                sessionStorage.setItem('jwt', response.data.token)
                this.props.logIn(response.data)
                this.redirect()
            } else { 
                this.setState({
                    errors: response.data.errors
                })
            }
        })
    }

    redirect = () => {
        this.props.history.push('/map')
    }

    handleErrors = () => {
        if (this.state.errors !== '') {
            return (
                <div>
                    {this.state.errors.map((error, index) => {
                        return <p key={index}>{error}</p>
                    })}
                </div>
            )
        }
        return null;
    }


    render() {
        return (
            <div>
                {this.handleErrors()}
                <form onSubmit={this.handleSubmit} id="login">
                    <label>Username:</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} required/><br />
                    <label>Password:</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required/><br /> 
                    <input type="submit" value="Log In"/>
                </form>
            </div>
        )
        
    }
}

export default withRouter(LogIn);