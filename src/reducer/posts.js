import {POSTS_REQUEST,POSTS_SUCCESS} from '../constants'
export default (posts = {}, action) => {
    const {type, payload} = action;
    switch (type) {
        case POSTS_REQUEST:
            return posts;
        case POSTS_SUCCESS:
            return { posts: payload };
        default:
            return posts;
    }
}
