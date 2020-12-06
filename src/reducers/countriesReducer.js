const countriesReducer = (state = { }, action) => {
    switch (action.type) {
        case "LOADING_COUNTRIES":
            return {
                ...state, 
                loading: true
            }

        case "ADD_COUNTRIES":
            return {
                ...state,
                countries: action.countries,
                loading: false
            }

        default: 
            return state;
    }
}

export default countriesReducer;