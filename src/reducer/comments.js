import {COMMENTS_REQUEST, COMMENTS_SUCCESS} from '../constants'

export default (comments = {}, action) => {
    const {type, payload} = action;
    switch (type) {
        case COMMENTS_REQUEST:
            return comments;
        case COMMENTS_SUCCESS:
            return { comments: payload };
        default:
            return comments;
    }
}
