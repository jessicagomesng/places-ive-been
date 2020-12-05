// refactor as functional

import React from 'react';

class LogIn extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <label>Username:</label>
                    <input type="text" name="username" />
                    <label>Password:</label>
                    <input type="password" name="password" />
                </form>
            </div>
        )
    }
}

export default LogIn;