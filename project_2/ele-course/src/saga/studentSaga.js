import { takeEvery, put } from 'redux-saga/effects'
import { GET_STUDENT_REQUEST, ADD_STUDENT_REQUEST, DELETE_STUDENT_REQUEST, UPDATE_REQUEST, SEARCH_STUDENT_REQUEST, PAGINATE_STUDENT_REQUEST, LIMIT } from '../constant'
import * as callAPI from '../fetchAPI/studentAPI'
import callAPIDelete from '../fetchAPI/deleteAPI'
import * as actions from '../action/studentAction'
import * as actionss from '../action/deleteAction'
import { updateStudent } from '../fetchAPI/studentAPI'


function* handleGetStudents() {
    try {
        const response = yield callAPI.getStudent();
        yield put(actions.getStudentSuccess(response))
    } catch (error) {
        yield put(actions.getStudentFailure(error))
    }
}

function* handleAddStudent(action) {
    try {
        yield callAPI.addStudent({ name: action.payload });
        yield put(actions.addStudentSuccess())
        yield put(actions.getStudentRequest())

    } catch (error) {
        yield put(actions.addStudentFailure(error))
    }
}

function* handleDeleteStudent(action) {
    try {
        yield callAPIDelete(action.paylod);
        yield put(actionss.deleteStudentSuccess())
        yield put(actions.getStudentRequest())

    } catch (error) {
        yield put(actionss.deleteStudentFailure(error))
    }
}

function* hihi(action) {
    try {
        yield updateStudent(action.payload)
        yield put(actions.updateStudentSuccess())
        yield put(actions.getStudentRequest())

    } catch (error) {
        yield put(actions.updateStudentFailure(error))
    }
}

function* handleSearchStudent(action) {
    try {
        const response = yield callAPI.searchStudent(action.payload)
        yield put(actions.searchStudentSuccess(response))
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
        const response = yield callAPI.getPaginateStudent(activePage)

        yield put(actions.paginateStudentSuccess({
            totalPage: response.TotalPage,
            activePage,
            listStudent: response.listTasks,
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
    takeEvery(GET_STUDENT_REQUEST, handleGetStudents),
    takeEvery(ADD_STUDENT_REQUEST, handleAddStudent),
    takeEvery(DELETE_STUDENT_REQUEST, handleDeleteStudent),
    takeEvery(UPDATE_REQUEST, hihi),
    takeEvery(SEARCH_STUDENT_REQUEST, handleSearchStudent),
    takeEvery(PAGINATE_STUDENT_REQUEST, handlePaginateStudent)

]

export default studentSaga;