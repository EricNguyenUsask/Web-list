import * as types from '../constant'
 
function getStudentRequest() {
    return {
        type: types.GET_STUDENT_REQUEST
    }
}
 
function getStudentSuccess(payload) {
    return {
        type: types.GET_STUDENT_SUCCESS,
        payload
    }
}
 
function getStudentFailure(payload) {
    return {
        type: types.GET_STUDENT_FAILURE,
        payload
    }
}

function addStudentFailure(payload) {
    return {
        type: types.ADD_STUDENT_FAILURE,
        payload
    }
}

function addStudentRequest(payload) {
    return {
        type: types.ADD_STUDENT_REQUEST,
        payload
    }
}

function addStudentSuccess(payload) {
    return {
        type: types.ADD_STUDENT_SUCCESS,
        payload
    }
}

function updateStudentRequest(payload) {
    return {
        type: types.UPDATE_REQUEST,
        payload
    }
}

function updateStudentSuccess(payload) {
    return {
        type: types.UPDATE_SUCCESS,
        payload
    }
}

function updateStudentFailure(payload) {
    return {
        type: types.UPDATE_FAILURE,
        payload
    }
}

function searchStudentRequest(payload) {
    return {
        type: types.SEARCH_STUDENT_REQUEST,
        payload
    }
}

function searchStudentSuccess(payload) {
    return {
        type: types.SEARCH_STUDENT_SUCCESS,
        payload
    }
}

function searchStudentFailure(payload) {
    return {
        type: types.SEARCH_STUDENT_FAILURE,
        payload
    }
}

function paginateStudentRequest(payload) {
    return {
        type: types.PAGINATE_STUDENT_REQUEST,
        payload
    }
}

function paginateStudentSuccess(payload) {
    return {
        type: types.PAGINATE_STUDENT_SUCCESS,
        payload
    }
}

function paginateStudentFailure(payload) {
    return {
        type: types.PAGINATE_STUDENT_FAILURE,
        payload
    }
}



 
export {
    getStudentRequest,
    getStudentSuccess,
    getStudentFailure,
    
    addStudentFailure,
    addStudentRequest,
    addStudentSuccess,

    updateStudentFailure,
    updateStudentRequest,
    updateStudentSuccess,

    searchStudentRequest,
    searchStudentSuccess,
    searchStudentFailure,

    paginateStudentRequest,
    paginateStudentSuccess,
    paginateStudentFailure

    
}

