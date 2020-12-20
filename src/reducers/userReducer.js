export default function userReducer(state = {}, action) {
    switch (action.type) {
        case "LOG_IN":
            return action.data.user

        case "LOG_OUT":
            return {}

        case "VISIT_COUNTRY":
            return action.payload.user

        default:
            return state;
    }
}