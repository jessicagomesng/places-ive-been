// refactor as functional

import React from 'react';

class SignUp extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <label>Email:</label>
                    <input type="text" name="email" />
                    <label>Username:</label>
                    <input type="text" name="username" />
                    <label>Password:</label>
                    <input type="password" name="password" />
                    <label>Password Confirmation:</label>
                    <input type="password" name="passwordConfirmation" />
                </form>
            </div>
        )
    }
}

export default SignUp;