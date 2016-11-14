import api from './api'
const user = {};
function getUserInfo(){
    if('localStorage' in window){
        return JSON.parse(localStorage.getItem('cnodeUser'))||null
    }else{
        console.log('不支持localstorage');
        return null;
    }
}

function setUserInfo(accesstoken){
    user.accesstoken = accesstoken;
    if('localStorage' in window){
        api.checkAccessToken({
            'accesstoken':accesstoken
        })
        .then((res)=>{
            let result = res.data;
            if(result.success){
                user.loginname = result.loginname;
                localStorage.setItem('cnodeUser',JSON.stringify(user));
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }else{
        console.log('不支持localstorage');
    } 
}

function clearUserInfo(){
    if('localStorage' in window){
        localStorage.removeItem('cnodeUser');
    }
}
export default {
    getUserInfo,
    setUserInfo,
    clearUserInfo
}
