import logo from './logo.svg';
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchCountries } from './actions/countryActions'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import Map from './containers/Map'
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

  handleLogin = (data) => {
    // this.setState({
    //   isLoggedIn: true,
    //   user: data.user
    // })
    this.props.logIn(data);
    // this.loginStatus();
  }

  handleLogout = () => {
    // this.setState({
    //   isLoggedIn: false,
    //   user: {}
    // })
    this.props.logOut();
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          Welcome to Places I've Been 
          {/* if the user is not logged in, then display these links */}
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
          {/* otherwise, redirect to the user's profile page  */}
        <Switch>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <LogIn handleLogin={this.handleLogin} />
          </Route>
          <Route path="/map">
            <Map fetchCountries={this.props.fetchCountries}/>
            {/* {this.props.isLoggedIn ? <Map /> : <Redirect to="/login" />} */}
          </Route>
        </Switch>
        </div>
      </Router>
    )
  }

}

// export default App;

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    user: state.user,
    countries: state.countries,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (data) => dispatch({ type: 'LOG_IN', payload: data }),
    logOut: () => dispatch({ type: 'LOG_OUT' }),
    fetchCountries: () => dispatch(fetchCountries())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

