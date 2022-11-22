import { takeEvery, put } from 'redux-saga/effects'
import { GET_TEACHER_REQUEST } from '../constant'
import { getTeacher } from '../fetchAPI/teacherAPI'
import * as action from '../action/teacherAction'
 
function* handleGetTeachers() {
    try {
        const response = yield getTeacher();
        yield put(action.getTeacherSuccess(response))
    } catch (error) {
        yield put(action.getTeacherFailure(error))
    }
}
 
const teacherSaga = [
    takeEvery(GET_TEACHER_REQUEST, handleGetTeachers)
]
 
export default teacherSaga;