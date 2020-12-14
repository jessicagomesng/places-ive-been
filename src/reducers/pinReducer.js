const pinReducer = (state = { pins: [] }, action) => {
    switch (action.type) {
        case "LOADING_PINS":
            return {
                ...state,
                pins: [...state.pins], 
                loading: true
            }

        case "ADD_PINS":
            return {
                ...state, 
                pins: action.pins,
                loading: false
            }
        
        case 'ADD_PIN':
            return {
                ...state,
                pins: [state.pins, action.payload]
            }

        default: 
            return state;
    }
}

export default pinReducer;