// refactor as functional

import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            password_confirmation: '',
            errors: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, username, password, password_confirmation } = this.state;
        let user = {
            email: email,
            username: username,
            password: password,
            password_confirmation: password_confirmation
        }

        axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
        .then(response => {
            if (response.data.status === 'created') {
                this.props.handleLogin(response.data)
                this.redirect()
            } else {
                this.setState({
                    errors: response.data.errors
                })
            }
        })
        .catch(error => console.log('api errors:', error))
    };
    
    redirect = () => {
        this.props.history.push('/')
    }

    handleErrors = () => {
        if (this.state.errors !== '') {
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
        return '';
    }

    render() {
        return (
            <div>
                {this.handleErrors()}
                <form onSubmit={this.handleSubmit} id="sign-up">
                    <label>Email:</label>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/><br />
                    <label>Username:</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/><br />
                    <label>Password:</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/><br />
                    <label>Password Confirmation:</label>
                    <input type="password" name="password_confirmation" value={this.state.password_confirmation} onChange={this.handleChange}/><br />
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        )
    }
}

export default SignUp;