import { takeEvery, put} from 'redux-saga/effects'
import * as types from '../constant'
import * as callAPI from '../fetchAPI/studentAPI'
import callAPIDelete from '../fetchAPI/deleteAPI'
import * as actions from '../action/studentAction'
import * as actionss from '../action/deleteAction'
//import { updateStudent } from '../fetchAPI/studentAPI'


function* handleGetStudents() {
    try {
        const response = yield callAPI.getStudent();
        yield put(actions.getStudentSuccess(response))
        yield put(actions.paginateStudentRequest())
    } catch (error) {
        yield put(actions.getStudentFailure(error))
    }
}

// function* handleAddStudent(action) {
//     const limit = 5;
//     let activePage
//     try {
//         yield callAPI.addStudent({ name: action.payload });
//         yield put(actions.addStudentSuccess())
//         // yield put(actions.getStudentRequest())
//         const currentState = yield select((state) => {
//             return {
//                 totalPage: state.student.totalPage,
//                 numberRecords: state.student.numberRecords
//             }
//         })
//         if (currentState.numberRecords % limit === 0) {
//             activePage = currentState.totalPage + 1
//         } else {
//             activePage = currentState.totalPage
//         }
//         yield put(actions.paginateStudentRequest(activePage))

//     } catch (error) {
//         yield put(actions.addStudentFailure(error))
//     }
// }

function* handleAddStudent(action){
    try {
        yield callAPI.addStudent({name: action.payload});
        yield put(actions.addStudentSuccess());
        yield put(actions.getStudentRequest());
        yield put(actions.paginateStudentRequest())
    } catch (error) {
        yield put(actions.addStudentFailure(error));
    }
}

function* handleDeleteStudent(action) {
    try {
        yield callAPIDelete.deleteStudent(action.payload);
        yield put(actionss.deleteStudentSuccess())
        yield put(actions.getStudentRequest())
        yield put(actions.paginateStudentRequest())

    } catch (error) {
        yield put(actionss.deleteStudentFailure(error))
    }
}

function* hihi(action) {
    try {
        yield callAPI.updateStudent(action.payload)
        yield put(actions.updateStudentSuccess())
        yield put(actions.paginateStudentRequest())

    } catch (error) {
        yield put(actions.updateStudentFailure(error))
    }
}

function* handleSearchStudent(action) {
    try {
        const response = yield callAPI.searchStudent(action.payload)
        yield put(actions.searchStudentSuccess(response.listTasks))
    } catch (error) {
        yield put(actions.searchStudentFailure(error))
    }

}

function* handlePaginateStudent(action) {
    try {
        //Lấy dữ liệu theo trang


        //Lấy tất cả dữ liệu
        // const totalRecord = yield callAPI.getStudent()
        // const totalPage = Math.ceil(totalRecord.length / LIMIT)
        const activePage = action.payload
        const response = yield callAPI.paginateStudent(activePage)
        yield put(actions.paginateStudentSuccess({
            totalPage: response.TotalPage,
            activePage,
            listStudent: response.listTasks,
            numberRecords: response.numberRecords
        }))
        /**
         * Tổng số trang = Tổng bản ghi/ giới hạn
         * Math.ceil() là phương thức làm tròn lên
         * Totalpage= Math.Ceil(totalRecord/ limit)
         * 
         * Tổng bản ghi= mảng dữ liệu.length
         * Mảng dữ liệu thì cần get all
         */
    } catch (error) {
        yield put(actions.paginateStudentFailure(error))
    }
}

const studentSaga = [
    takeEvery(types.GET_STUDENT_REQUEST, handleGetStudents),
    takeEvery(types.ADD_STUDENT_REQUEST, handleAddStudent),
    takeEvery(types.DELETE_STUDENT_REQUEST, handleDeleteStudent),
    takeEvery(types.UPDATE_REQUEST, hihi),
    takeEvery(types.SEARCH_STUDENT_REQUEST, handleSearchStudent),
    takeEvery(types.PAGINATE_STUDENT_REQUEST, handlePaginateStudent)

]

export default studentSaga;