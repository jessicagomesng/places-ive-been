import axios from 'axios';

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

export const fetchPins = (userID) => {
    return (dispatch) => {
        dispatch({type: 'LOADING_PINS'})
        fetch(`http://localhost:3001/users/${userID}/pins`, { credentials: 'include' })
        .then(response => { 
            return response.json()
        })
        .then(responseJSON => {
            dispatch({type: 'ADD_PINS', pinCollection: responseJSON})
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
    }
}

export const addAPin = (pin) => {
    return (dispatch) => {
        axios.post('http://localhost:3001/pins', {pin}, {withCredentials: true})
        .then(response => {
            dispatch({type: 'ADD_PIN', payload: response.data})
        })
    }
}

export const editPin = (pin) => {
    return (dispatch) => {
        axios.patch(`http://localhost:3001/pins/${pin.id}`, {pin}, {withCredentials: true})
        .then(response => {
            dispatch({type: 'EDIT_PIN', payload: response.data})
        })
    }
}

export const deletePin = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3001/pins/${id}`, {withCredentials: true})
        .then(response => {
            dispatch({type: 'DELETE_PIN', payload: response.data})
        })
    }
}