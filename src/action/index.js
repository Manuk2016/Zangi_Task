import * as constants from '../constants'
//Posts request
export function postsDataRequest(){
    return {
        type: constants.POSTS_REQUEST
    }
}
export function postsDataSuccess(payload) {
    return {
        type: constants.POSTS_SUCCESS,
        payload
    }
}
export function postsDataError() {
    return {
        type: constants.POSTS_ERROR
    }
}
//Users request
export function usersDataRequest(){
    return {
        type: constants.USERS_REQUEST
    }
}
export function usersDataSuccess(payload) {
    return {
        type: constants.USERS_SUCCESS,
        payload
    }
}
export function usersDataError() {
    return {
        type: constants.USERS_ERROR
    }
}
export function commentsDataRequest(){
    return {
        type: constants.COMMENTS_REQUEST
    }
}
export function commentsDataSuccess(payload){
    return {
        type: constants.COMMENTS_SUCCESS,
        payload
    }
}
export function commentsDataError(){
    return {
        type: constants.COMMENTS_ERROR
    }
}


