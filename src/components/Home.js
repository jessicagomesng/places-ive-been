import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Home extends React.Component {

    handleLogOut = () => {
        axios.post('http://localhost:3001/logout', {withCredentials: true})
        .then(response => {
          sessionStorage.removeItem('jwt');
          console.log(response);
          this.props.logOut(response.data);
          console.log(this.props)
          this.props.history.push('/')
        })
      }

    render() {
        if (this.props.isLoggedIn === 'true') {
            return (
                <>
                    <Link to="/map">Map</Link>
                    <Link to="/logout">Log Out</Link>
                </>
            )
        } else {
            return (
                <>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/login">Log In</Link>
                    <Link to="/logout" onClick={this.handleLogOut}>Log Out</Link>
                </>
            )
        }
    }
}

// const Home = () => {
//     const history = useHistory();
//     return (
//         <>
//             <button onClick={ () => history.push('/map') } >Map</button>
//         </>
//     )
    
// }

export default withRouter(Home);