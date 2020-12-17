import logo from './css/images/logo.png';
import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCountries, visitCountry, fetchPins, addAPin, editPin, deletePin } from './actions/actionsIndex'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import SignUp from './components/SignUp'
import Home from './components/Home'
import LogIn from './components/LogIn'
import Map from './containers/Map'
import AddPinMap from './containers/AddPinMap'
import Pins from './containers/Pins'
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'
import './css/App.css';

class App extends Component {

  handleLogOut = () => {
    axios.post('http://localhost:3001/logout', {withCredentials: true})
    .then(response => {
      sessionStorage.removeItem('jwt');
      console.log(response);
      this.props.logOut(response.data);
      console.log(this.props)
    })
  }

  render() {
    let {isLoggedIn} = this.props 

    const renderNavBar = () => {
      if (isLoggedIn) {
        return (
        <header>
          <img src={logo} alt="Places I've Been logo" id="nav-logo" />
          <nav>
              <Link to="/map">Map</Link>
              <Link to="/pins">View Pins</Link>
              <Link to="/add-a-pin">Add Pin</Link>
              <Link to="/logout" onClick={this.handleLogOut}>Log Out</Link>
          </nav>
        </header>)

      }
    }

    return (
      <Router>
        <div className="App">
          {renderNavBar()}
          <PublicRoute path="/" loggedIn={this.props.isLoggedIn} component={Home} logOut={this.props.logOut} />

        <Switch>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <LogIn logIn={this.props.logIn} isLoggedIn={this.props.isLoggedIn} />
          </Route>
          <ProtectedRoute path="/map" loggedIn={this.props.isLoggedIn} component={Map} fetchCountries={this.props.fetchCountries} visitCountry={this.props.visitCountry} map={this.props.map} user={this.props.user} logOut={this.props.logOut} />
          <ProtectedRoute path="/pins" loggedIn={this.props.isLoggedIn} component={Pins} fetchCountries={this.props.fetchCountries} fetchPins={this.props.fetchPins} editPin={this.props.editPin} deletePin={this.props.deletePin} map={this.props.map} user={this.props.user} pins={this.props.pins} />
          <ProtectedRoute path="/add-a-pin" loggedIn={this.props.isLoggedIn} component={AddPinMap} fetchCountries={this.props.fetchCountries} map={this.props.map} user={this.props.user} addAPin={this.props.addAPin} />
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
    addAPin: (pinData) => dispatch(addAPin(pinData)),
    editPin: (pinData) => dispatch(editPin(pinData)),
    deletePin: (pinId) => dispatch(deletePin(pinId)),
    logIn: (user) => dispatch({type: 'LOG_IN', user}),
    logOut: (data) => dispatch({type: 'LOG_OUT', data}),
    fetchCountries: () => dispatch(fetchCountries()),
    fetchPins: (userID) => dispatch(fetchPins(userID)),
    visitCountry: (userID, countryID) => dispatch(visitCountry(userID, countryID))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
