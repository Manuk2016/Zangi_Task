import {USERS_REQUEST,USERS_SUCCESS} from '../constants'
export default (users = {}, action) => {
    const {type, payload} = action;
    switch (type) {
        case USERS_REQUEST:
            return users;
        case USERS_SUCCESS:
            return { users: payload };
        default:
            return users;
    }
}
