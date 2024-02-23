// reducers/index.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import registrationReducer from './registerReducer';
import { attendanceReducer } from './attendanceReducer';
import showAttendanceReducer from './showAttendanceReducer';
import timesheetReducer from './timesheetReducer';
import showBirthdayReducer from './birthdayReducer';
const rootReducer = combineReducers({
    // login: authReducer,
    //  register: registrationReducer,
    attendance:attendanceReducer,
    timesheet:timesheetReducer,
    viewAttendance:showAttendanceReducer,
    birthday:showBirthdayReducer,

});

export default rootReducer;
