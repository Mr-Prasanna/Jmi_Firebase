import axios from 'axios';
// import { BASE_API_URL } from './config';

//-- const BASE_API_URL = "http://192.168.60.214:8080/api/v1";

// const EMP_BASE_API_URL="http://localhost:8082/employee";
// const EMP_BASE_API_URL="http://localhost:8080/employee";
const EMP_BASE_API_URL="http://192.168.60.247:8080/employee";
// const EMP_BASE_API_URL="http://10.0.2.2:8080/employee";
// const EMP_BASE_API_URL="http://127.0.0.1:8080/employee";
// const EMP_BASE_API_URL="http://0.0.0.0:8080/employee";


export const api = axios.create({
    //baseURL: BASE_API_URL,
    baseURL: EMP_BASE_API_URL,
    timeout: 6000,
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
        'Access-Control-Allow-Headers': '*',
        //'Access-Control-Allow-Headers':'Origin,X-Api-Key,X-Requested-With,Content-Type,Accept,Authorization',
    }

});
// export const LOGIN_API = BASE_API_URL + '/login';
// export const REGISTER_API = BASE_API_URL + '/signup';
// export const VERIFY_API = BASE_API_URL + '/verifyEmail';
export const ADD_ATTENDANCE_API= EMP_BASE_API_URL+'/addAttendance';
export const SHOW_ATTENDANCE_API= EMP_BASE_API_URL+'/showAttendance';
export const BIRTHDAY_LIST_API = EMP_BASE_API_URL+'/birth_date';
