export default function userReducer(state = {}, action) => {
    switch (action.type) {
        case "LOG_IN":
            return action.payload.data

        default:
            return state;
    }
}