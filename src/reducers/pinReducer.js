const pinReducer = (state = { pins: [] }, action) => {
    let index;
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
                pins: [...state.pins, action.payload]
            }

        case 'EDIT_PIN':
            index = state.pins.findIndex((pin) => pin.id === action.payload.id)
            return {
                ...state,
                pins: [...state.pins.slice(0, index), action.payload, ...state.pins.slice(index + 1)]
            }

        case 'DELETE_PIN':
            index = state.pins.findIndex((pin) => pin.id === action.payload.id)
            return {
                ...state, 
                pins: [...state.pins.slice(0, index), ...state.pins.slice(index + 1)]
            }

        default: 
            return state;
    }
}

export default pinReducer;