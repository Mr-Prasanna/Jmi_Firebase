export const SHOW_BIRTHDAY_LIST = 'SHOW_BIRTHDAY_LIST';
export const BIRTHDAY_INFO = 'BIRTHDAY_INFO';

export const showBirthdayDetails=(onSuccess,onError) =>({
    type:SHOW_BIRTHDAY_LIST,
    //params,
    onSuccess,
    onError
})

export const birthdayInfo =(data)=>({
type:BIRTHDAY_INFO,
data
})
