import logo from './logo.svg';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCountries, visitCountry, fetchPins, addAPin } from './actions/countryActions'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/SignUp'
import Home from './components/Home'
import LogIn from './components/LogIn'
import Canvas from './components/Canvas'
import Map from './containers/Map'
import PinMap from './containers/PinMap'
import Pins from './containers/Pins'
import ProtectedRoute from './ProtectedRoute'
import './App.css';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isLoggedIn:false,
  //     user: {}
  //   };
  // }

  // componentDidMount() {
  //   this.loginStatus() 
  // }

  // loginStatus = () => {
  //   axios.get('http://localhost:3001/logged_in', {withCredentials: true})
  //   .then(response => {
  //     if (response.data.logged_in) {
  //       // this.handleLogin(response)
  //       console.log(this.props)
  //     } else {
  //       this.handleLogout()
  //       console.log(this.props)
  //     }
  //   })
  //   .catch(error => console.log('api errors:', error))
  // }

  // handleLogin = (data) => {
  //   this.props.logIn(data);
  //   debugger;
  //   <Redirect to="/map" />
  // }

  // handleLogout = () => {
  //   // this.setState({
  //   //   isLoggedIn: false,
  //   //   user: {}
  //   // })
  //   this.props.logOut();
  // }

  // draw = (ctx, frameCount) => {
  //   // ctx.fillStyle = '#000000'
  //   // ctx.beginPath()
  //   // ctx.arc(50, 100, 20, 0, 2*Math.PI)
  //   // ctx.fill()
  //   ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  //   ctx.fillStyle = '#000000'
  //   ctx.beginPath()
  //   ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
  //   ctx.fill()
  // }

  markers = () => {
    return []
  }

  render() {
    return (
      <Router>
        <div className="App">
          Welcome to Places I've Been 
          {/* <Canvas draw={this.draw} /> */}
          <Home isLoggedIn={this.props.isLoggedIn} logOut={this.props.logOut}/>
          {/* if the user is not logged in, then display these links */}
          {/* <Link to="/logout" onClick={this.props.logOut}>Log Out</Link> */}
          {/* otherwise, redirect to the user's profile page  */}
          {/* <Switch>
            <AuthRoute path="/signup" >
              <SignUp />
            </AuthRoute>
            <AuthRoute path="/login" >
              <LogIn handleLogin={this.handleLogin} />
            </AuthRoute>
            <AuthRoute path="/map" >
              <Map fetchCountries={this.props.fetchCountries} visitCountry={this.props.visitCountry} map={this.props.map} user={this.props.user} logOut={this.props.logOut} />
            </AuthRoute>
          </Switch> */}
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
