import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../css/images/logo.png';

const Home = (props) => {
  return (
    <>
      <img src={logo} alt="Places I've Been logo" id="main-logo" />
      <Link to="/signup">Sign Up</Link> 
      <Link to="/login">Log In</Link>
    </>
  )
}

export default Home;