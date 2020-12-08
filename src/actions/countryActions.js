import axios from 'axios';

export const logInUser = (user) => {
    return (dispatch) => {
        axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
        .then(response => {
            // const token = response.data.token 
            // localStorage.setItem('token', token); 
            if (response.data.status === 200) {
                sessionStorage.setItem('jwt', response.data.token)
            }
            dispatch({type: 'LOG_IN', payload: response.data})
            debugger;
        })
    }
        // const response = axios.post('http://localhost:3001/login', {user}, {withCredentials: true})  // user is object with form data
        // .then( (userData) => { 
        // //   sessionStorage.setItem('jwt', userData.data.jwt) // send jwt token to session storage
        // history.push("/map") // alters the URL in browser
        // return userData // sets the response to equal username
        // })

        //     dispatch({type: 'LOG_IN',
        //     payload: response}) // sending user info as payload to the reducer
}

    //     axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
    //     .then(response => {
    //         if (response.data.logged_in) {
    //             this.props.handleLogin(response.data);
    //             // this.redirect()
    //         } else {
    //             this.setState({
    //                 errors: response.data.errors
    //             })
    //         }
    //     })
    //     .catch(error => console.log('api_errors:', error))
    // };

// export const logOutUser = () => {
//     return (dispatch) => {
//         axios.post('http://localhost:3001/logout', {withCredentials: true})
//         .then(response => {
//             console.log(response)
//             debugger;
//             // redirect to homepage
//         })
//     }
// }

export const fetchCountries = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_COUNTRIES'})
        fetch('http://localhost:3001/countries', { credentials: 'include' })
        .then(response => {
            return response.json()
        })
        .then(responseJSON => {
            dispatch({ type: 'ADD_COUNTRIES', countries: responseJSON })
        })
    }
}

export const visitCountry = (userID, countryID) => {
    return (dispatch) => {
        let users_country = {
            userID: userID,
            countryID: countryID
        }
        axios.post('http://localhost:3001/users_countries', {users_country}, {withCredentials: true })
        .then(response => {
            dispatch({ type: 'VISIT_COUNTRY', payload: response.data })
        })
        // let configObj = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': "application/json",
        //         'Accept': "application/json"
        //     },
        //     data: JSON.stringify({ users_country })
        // }
        // debugger;
        // fetch('http://localhost:3001/users_countries', configObj, { credentials: 'include' })
        // .then(response => {
        //     return response.json()
        // })
        // .then(responseJSON => {
        //     console.log(responseJSON)
        // })
    }
}