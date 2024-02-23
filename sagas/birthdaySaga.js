import {put,takeLatest,call} from 'redux-saga/effects';
import { BIRTHDAY_INFO ,birthdayInfo} from '../actions/birthdayAction';
import * as birthdayApi from '../apis/birthdayApi';

function* birthdayList(action){
console.log("birthdayAction1++",action)
    try{
        const response = yield call(birthdayApi.birthdayList, action)
        console.log("birthdayResponse",response);
        yield put(birthdayInfo(response))
        console.log("birthInfo++",birthdayInfo(response));
        action.onSuccess(response);
    }
    catch (error) {
        console.log("ShowBirthdayFailure", error);
        action.onError(error);
    }
}

function* showBirthdaySaga(){
    yield takeLatest(BIRTHDAY_INFO,birthdayList)
}

export default showBirthdaySaga;