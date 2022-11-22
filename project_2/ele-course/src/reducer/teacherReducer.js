import * as types from '../constant'

const DEFAULT_STATE = {
    listTeacher: [],
    isFetching: false,
    error: null
}
 
const teacherReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_TEACHER_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.GET_TEACHER_SUCCESS:
            return {
                listTeacher: action.payload,
                isFetching: false,
                error: null
            }
        case types.GET_TEACHER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return DEFAULT_STATE;
    }
}
 
export default teacherReducer
