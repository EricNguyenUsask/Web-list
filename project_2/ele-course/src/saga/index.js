import { all } from 'redux-saga/effects'
import studentSaga from './studentSaga'
import teacherSaga from './teacherSaga'
function* rootSaga() {
    yield all([
        ...studentSaga,
        ...teacherSaga
    ])
}
 
export default rootSaga