import * as types from '../constant'

function deleteStudentFailure(payload) {
    return {
        type: types.DELETE_STUDENT_FAILURE,
        payload
    }
}

function deleteStudentRequest(payload) {
    return {
        type: types.DELETE_STUDENT_REQUEST,
        payload
    }
}

function deleteStudentSuccess(payload) {
    return {
        type: types.DELETE_STUDENT_SUCCESS,
        payload
    }
}
 
export {
    deleteStudentFailure,
    deleteStudentRequest,
    deleteStudentSuccess
}
