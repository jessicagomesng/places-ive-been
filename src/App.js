import logo from './logo.svg';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCountries, visitCountry, fetchPins, addAPin } from './actions/countryActions'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/SignUp'
import Home from './components/Home'
import LogIn from './components/LogIn'
import Map from './containers/Map'
import PinMap from './containers/PinMap'
import Pins from './containers/Pins'
import ProtectedRoute from './ProtectedRoute'
import './App.css';

class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">
          Welcome to Places I've Been 
          <Home isLoggedIn={this.props.isLoggedIn} logOut={this.props.logOut}/>
        <Switch>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <LogIn logIn={this.props.logIn} isLoggedIn={this.props.isLoggedIn} />
          </Route>
          {/* <Route path="/map" render={ routerProps => <Map {...routerProps} isLoggedIn={this.props.isLoggedIn} fetchCountries={this.props.fetchCountries} visitCountry={this.props.visitCountry} map={this.props.map} user={this.props.user} logOut={this.props.logOut} />} /> */}
          <ProtectedRoute path="/map" loggedIn={this.props.isLoggedIn} component={Map} fetchCountries={this.props.fetchCountries} visitCountry={this.props.visitCountry} map={this.props.map} user={this.props.user} logOut={this.props.logOut} />
            {/* <Map fetchCountries={this.props.fetchCountries} visitCountry={this.props.visitCountry} map={this.props.map} user={this.props.user} logOut={this.props.logOut}/> */}
            {/* <AuthRoute path="/map" isLoggedIn={this.props.isLoggedIn} component={<Map isLoggedIn={this.props.isLoggedIn} fetchCountries={this.props.fetchCountries} visitCountry={this.props.visitCountry} map={this.props.map} user={this.props.user} logOut={this.props.logOut} />} />  */}
          {/* </Route> */}
          <Route path="/add-a-pin">
            <PinMap fetchCountries={this.props.fetchCountries} map={this.props.map} user={this.props.user} addAPin={this.props.addAPin}/>
          </Route>
          <Route path="/pins" render={routerProps => <Pins {...routerProps} fetchCountries={this.props.fetchCountries} fetchPins={this.props.fetchPins} map={this.props.map} user={this.props.user} pins={this.props.pins} />} />
            {/* <Pins fetchCountries={this.props.fetchCountries} fetchPins={this.props.fetchPins} map={this.props.map} user={this.props.user} pins={this.props.pins}/>
          </Route> */}
        </Switch>
        </div>
      </Router>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    user: state.user,
    map: state.map,
    pins: state.pins,
    countries: state.countries 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // logIn: (data) => dispatch(logInUser(data)),
    addAPin: (pinData) => dispatch(addAPin(pinData)),
    logIn: (user) => dispatch({type: 'LOG_IN', user}),
    logOut: (data) => dispatch({type: 'LOG_OUT', data}),
    fetchCountries: () => dispatch(fetchCountries()),
    fetchPins: (userID) => dispatch(fetchPins(userID)),
    visitCountry: (userID, countryID) => dispatch(visitCountry(userID, countryID))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
