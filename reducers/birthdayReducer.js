// import { BIRTHDAY_LIST_API,BIRTHDAY_INFO } from "../apis/birthdayApi";
import {SHOW_BIRTHDAY_LIST,BIRTHDAY_INFO} from  "../actions/birthdayAction"

const initialState ={
    loading:false, 
    error:null,
    birthdayInfo:{}
};

export const showBirthdayReducer=(state =initialState,action) => {
  switch (action.type){

    case SHOW_BIRTHDAY_LIST:
        return{
            ...state,
            loading:true,
            error:null,
        };
    case BIRTHDAY_INFO:
        return{
            ...state,
            ...{birthdayInfo: action}
        }
    default:
        return state;
    }
};

export default showBirthdayReducer;