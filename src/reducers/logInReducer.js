export default function logInReducer(state = false, action) {
    switch (action.type) {
        case "LOG_IN":
            return action.payload.logged_in

        case "LOG_OUT":
            return action.payload.logged_in
            
        default:
            return state;
    }
}