import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PublicRoute = ( { component: Comp, loggedIn, path, ...rest }) => {
    return (
        <Route path={path} render={(routerProps) => { return loggedIn ? <Redirect to="/map" /> : <Comp {...routerProps} {...rest} /> }
    }/> 
    )
}

export default PublicRoute;
