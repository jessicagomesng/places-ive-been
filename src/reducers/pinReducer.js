const pinReducer = (state = { pinCollection: [] }, action) => {
    let index;
    switch (action.type) {
        case "LOADING_PINS":
            return {
                ...state,
                pinCollection: [...state.pinCollection], 
                loading: true
            }

        case "ADD_PINS":
            return {
                ...state, 
                pinCollection: action.pinCollection,
                loading: false
            }
        
        case 'ADD_PIN':
            return {
                ...state,
                pinCollection: [...state.pinCollection, action.payload]
            }

        case 'EDIT_PIN':
            index = state.pinCollection.findIndex((pin) => pin.id === action.payload.id)
            return {
                ...state,
                pinCollection: [...state.pinCollection.slice(0, index), action.payload, ...state.pinCollection.slice(index + 1)]
            }

        case 'DELETE_PIN':
            index = state.pinCollection.findIndex((pin) => pin.id === action.payload.id)
            return {
                ...state, 
                pinCollection: [...state.pinCollection.slice(0, index), ...state.pinCollection.slice(index + 1)]
            }

        default: 
            return state;
    }
}

export default pinReducer;