// refactor as functional

import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

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
            if (response.data.logged_in) {
                this.props.handleLogin(response.data);
                // this.redirect()
            } else {
                this.setState({
                    errors: response.data.errors
                })
            }
        })
        .catch(error => console.log('api_errors:', error))
    };

    // redirect = () => {
    //     this.props.history.push('/map')
    // }

    handleErrors = () => {
        return (
            <div>
                <ul>
                    {this.state.errors.map((error, index) => {
                        return <li key={index}>{error}</li>
                    })}
                </ul>
            </div>
        )
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username:</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    <label>Password:</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <input type="submit" value="Log In"/>

                    <div>
                        Or <Link to="/signup">Sign Up</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default LogIn;