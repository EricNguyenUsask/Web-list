import * as types from '../constant'
 
const DEFAULT_STATE = {
    listStudent: [],
    isFetching: false,
    error: null,
    id: '',
    name: '',
    totalPage: 1,
    activePage: 1
}
 
const studentReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_STUDENT_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.GET_STUDENT_SUCCESS:
            return {
                listStudent: action.payload,
                isFetching: false,
                error: null
            }
        case types.GET_STUDENT_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        case types.ADD_STUDENT_REQUEST:
            return{
                ...state,
                isFetching: true
            }

        case types.ADD_STUDENT_SUCCESS:
            return{
                ...state,
                isFetching: false
            }
        
        case types.ADD_STUDENT_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }

        case types.UPDATE_REQUEST:
            return {
                ...state,
                isFetching: true
            }  
        case types.UPDATE_SUCCESS:
            return{
                ...state,
                isFetching: false
            }

        case types.UPDATE_FAILURE:
            return{
                 ...state,
                 isFetching: false,
                 error: action.payload
           }
        
        case types.SEARCH_STUDENT_REQUEST:
            return {
                ...state,
                isFetching: true
            } 
        
        case types.SEARCH_STUDENT_SUCCESS:
            return{
                ...state,
                isFetching: false,
                listStudent: action.payload
            }
        
        case types.SEARCH_STUDENT_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }

        case types.PAGINATE_STUDENT_REQUEST:
            return{
                ...state,
                isFetching: true
            }

        case types.PAGINATE_STUDENT_SUCCESS:
            return{
                ...state,
                isFetching:false,
                listStudent: action.payload.listStudent,
                activePage: action.payload.activePage,
                totalPage: action.payload.totalPage
            }
        
        
        default:
            return DEFAULT_STATE;
    }
}
 
export default studentReducer
