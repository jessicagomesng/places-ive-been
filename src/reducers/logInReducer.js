export default function logInReducer(state = false, action) {
    switch (action.type) {
        case "LOG_IN":
            return action.user.logged_in

        case "LOG_OUT":
            return action.data.logged_in
            
        default:
            return state;
    }
}