import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ( { component: Comp, loggedIn, path, ...rest }) => {
    return (
        <Route path={path} render={(routerProps) => { return loggedIn ? <Comp {...routerProps} {...rest} /> : <Redirect to="/login" />
    }}
    /> 
    )
}

export default ProtectedRoute;

