import {
    GET_TEACHER_FAILURE,GET_TEACHER_SUCCESS,GET_TEACHER_REQUEST
} from '../constant'
 
function getTeacherRequest() {
    return {
        type: GET_TEACHER_REQUEST
    }
}
 
function getTeacherSuccess(payload) {
    return {
        type: GET_TEACHER_SUCCESS,
        payload
    }
}
 
function getTeacherFailure(payload) {
    return {
        type: GET_TEACHER_FAILURE,
        payload
    }
}
 
export {
    getTeacherRequest,
    getTeacherSuccess,
    getTeacherFailure
}