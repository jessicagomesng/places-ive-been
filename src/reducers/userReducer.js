export default function userReducer(state = {}, action) {
    switch (action.type) {
        case "LOG_IN":
            // debugger;
            return action.payload.user

        case "LOG_OUT":
            return {}

        default:
            return state;
    }
}