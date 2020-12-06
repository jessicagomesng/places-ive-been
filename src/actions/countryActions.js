export const fetchCountries = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_COUNTRIES'})
        fetch('http://localhost:3001/countries')
        .then(response => {
            return response.json()
        })
        .then(responseJSON => {
            console.log(responseJSON)
        })
    }
}