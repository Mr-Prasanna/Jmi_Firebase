// sagas/index.js
import { all } from 'redux-saga/effects';
import authenticationSaga from './authenticationSaga';
import registrationSaga from './registrationSaga';
import  addTimeSheetSaga from './attendanceSaga';
import showTimesheetSaga from './showAttendanceSaga';
import timesheetSaga from './timesheetSaga';
import showBirthdaySaga from './birthdaySaga';

function* rootSaga() {
    yield all([
        // authenticationSaga(),
       // registrationSaga(),
        addTimeSheetSaga(),
        showTimesheetSaga(),
        showBirthdaySaga()
       // timesheetSaga(),

    ]);
}

export default rootSaga;
