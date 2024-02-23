import axios from 'axios';
import { BIRTHDAY_LIST_API } from './api';

export const birthdayList = async ()=>{
     // const response =  fetch(BIRTHDAY_LIST_API,{
    const response = await axios.post(BIRTHDAY_LIST_API,{
   
        method:'POST',
        headers: {
            Accept: 'application/json',
           'Content-Type': 'application/json',
            // 'Content-Type': "application/x-www-form-urlencoded",

        }
    })
    .then((res)=>{
    
        console.log('birthday res++',res)
        return res;
    })
    .catch((err)=>{
        console.log('birthday error :',err)
        return err;
    })
    return response;
} 

// fetch(BIRTHDAY_LIST_API, {
//     method: 'POST'
// }).then((response) => {
//     response.json().then((data) => {
//         console.log("dataResponse++", data.resultdata)
//         setEmpDetails(data.resultdata)
//     })

//     // response.json().then(i => i.forEach(i => console.log(i.responseData.First_Name,i.responseData.DOB)))
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// });
export default birthdayList;