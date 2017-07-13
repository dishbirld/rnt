

import {AsyncPost,AsyncPostNoUsr,AsyncPostNoUsr_B,AsyncPost_B} from './utils.jsx';

import {GETTOPJOBLIST,CHECKPROCESS,GETUSERINFO,MODUSERINFO,LOGINOK,GETUSERRESUME} from 'actionPath/action.jsx';

import {HOST,VERSION,USERID,VERSION_B} from 'cmPath/config.jsx';

import {fExportGetCookieMes,fGetLocalTime,fGetNonce,checkTelePhone} from 'cmPath/common.jsx';

export const fGetTopJobList = (oSearchCondition)=>{


    let dict = {
        name: 'open_search_job_list',
        page: 1,
        pagesize: 10,
        from: 'web_register'
    };
    let body = oSearchCondition;

    return dispatch =>{


        return AsyncPostNoUsr(dict,body,(data)=>{

            if (data[0] == 0) {
                dispatch({type: GETTOPJOBLIST, data:data[1]});
            }else{
                console.log(data)
            }

        },(data)=>{

            console.log(data);
        })
    }

};


export const fGetUserInfo = (successcallback,failcallback)=>{

    let dic = {

        name:"user_info",
        owner:fExportGetCookieMes(USERID)
    };

    return dispatch =>{


        return AsyncPost(dic,"",(data)=>{

            if (data[0] == 0) {
                dispatch({type: GETUSERINFO, data:data[1]});
                if (successcallback){   

                    successcallback(data)
                }
            }else{

                if (failcallback)
                    failcallback();

                console.log(data)
            }

        },(data)=>{

            console.log(data);
            if (failcallback)
                failcallback();
        })
    }

};


export const fModUserInfo = (body,callback)=>{

    let dic = {

        name:"mod_user_info"
    };

    return AsyncPost(dic, body, (data) => {

        if (data[0] == 0) {

            callback(data)
        } else {
            console.log(data)
        }

    }, (data) => {

        console.log(data);
    })


};


export const fRestPassword = (account,password,successcallback,failcallback) =>{


    let dic = {

        name:'app_reset_password',
        account:account,
        password:password,
        from:"web"
    };


    return AsyncPost(dic,"",(data)=>{

            if (successcallback)
                successcallback(data);
    },(data)=>{

        if(failcallback)
            failcallback(data[1])
    })

};

export const fRestPasswordV1_B = (account,password,successcallback,failcallback)=>{

    let dic = {

        name:'set_password',
        account:account,
        password:password,
    };


    return AsyncPost_B(dic,"",(data)=>{

        if (successcallback)
            successcallback();
    },(data)=>{

        if(failcallback)
            failcallback(data[1])
    })

};

/*C端求职者的登陆*/
export const fLogin = (account,password,successcallback,failcallback)=>{

    let url = HOST+VERSION + 'login_web?account=' + account + "&password=" +password+"&type=c";


        return fetch(url,{
            method: "get",
            "Content-Type": "application/json",
        })
            .then(response => {
                if (response.ok) {
                    response.json().then(json => {

                        if (json[0] == 0) {
                            if (successcallback)
                            successcallback(json[1]);
                        }else{
                            if (failcallback)
                                 failcallback(json[1])
                        }
                    })
                } else {
                    console.log("status", response.status);
                }
            })
            .catch(error => console.log(error))


};


export const fPhoneLogin = (phone,captcah,successcallback,failcallback)=>{

    let url = HOST+VERSION + 'login_web_captcha?account=' + phone + "&captcha=" +captcah;

    return dispatch =>{


        return fetch(url,{
            method: "get",
            "Content-Type": "application/json",
        })
            .then(response => {
                if (response.ok) {
                    response.json().then(json => {

                        if (json[0] == 0) {
                            successcallback(json[1]);
                        }else{
                            failcallback(json[1]);
                        }
                    })
                } else {
                    console.log("status", response.status);
                }
            })
            .catch(error => console.log(error))

    }
};


export const fRegisterC = (account,password,capcha,successcallback,failcallback)=>{


    let url = HOST+VERSION + 'app_register?account=' + account + "&password=" +password+"&captcha="+capcha;


    return fetch(url,{
        method: "get",
        "Content-Type": "application/json",
    })
        .then(response => {
            if (response.ok) {
                response.json().then(json => {

                    if (json[0] == 0){
                        if (successcallback)
                        successcallback(json[1]);
                    }else{
                        if (failcallback)
                            failcallback(json[1]);
                    }
                })
            } else {
                console.log("status", response.status);
            }
        })
        .catch(error => console.log(error))


};

export const fRegisterB = (account,password,capcha,hid,successcallback,failcallback)=>{


    let dic = {
        name:"register",
        account:account
    };
    let body = {};

    if (hid != 0) {
         body = {

            password: password,
            captcha: capcha,
            hid:hid
        };
    }else{

         body = {

            password: password,
            captcha: capcha
        };

    }

    return AsyncPostNoUsr_B(dic, body, (data) => {

            successcallback(data[1])

    }, (data) => {
        console.log(data);
        failcallback(data[1])

    })


};

export const fSendCaptcha = (phone,successcallback,failcallback)=>{

    let url = HOST+VERSION + 'send_captcha?phone=' + phone;

    return fetch(url,{
        method: "get",
        "Content-Type": "application/json",
    })
        .then(response => {
            if (response.ok) {
                response.json().then(json => {
                if(json[0] == 0) {
                    console.log(json);
                    if (successcallback)
                        successcallback();
                }else{
                    if (failcallback)
                        failcallback(json[1])
                }
                })
            } else {
                console.log("status", response.status);
            }
        })
        .catch(error => console.log(error))

};


export const fSendCaptcha_B = (phone,type,successcallback,failcallback)=>{

    let url = HOST+VERSION_B + 'send_sms_captcha?phone=' + phone+"&action=" + type;

    return fetch(url,{
        method: "get",
        "Content-Type": "application/json",
    })
        .then(response => {
            if (response.ok) {
                response.json().then(json => {
                    if(json[0] == 0) {
                        console.log(json);
                        if (successcallback)
                        successcallback();
                    }else{
                        if (failcallback)
                            failcallback(json[1])
                    }
                })
            } else {
                console.log("status", response.status);
            }
        })
        .catch(error => console.log(error))

};


export const fSendCaptchaEmail_B = (account)=>{

    let url = HOST+VERSION_B + 'send_captcha?account=' + account + '&action=register&nonce=' + fGetNonce() + '&ts=' + fGetLocalTime();

    return fetch(url,{
        method: "get",
        "Content-Type": "application/json",
    })
        .then(response => {
            if (response.ok) {
                response.json().then(json => {

                })
            } else {
                console.log("status", response.status);
            }
        })
        .catch(error => console.log(error))

};

export const fBindEmail_B = (account,phone,captcha,successcallback,failcallback) =>{

    let dic = {

        name:"set_email_or_phone",
        account:account,
        phone:phone,
        captcha:captcha,
        type:"email"
    };

    return AsyncPost_B(dic,"",(data)=>{

        if (successcallback)
            successcallback(data);

    },(data)=>{
        if (failcallback)
            failcallback(data);
    })

};


export const fBindPhone_B = (account,phone,captcha,force = 0,successcallback,failcallback) =>{

    let dic = {

        name:"set_email_or_phone",
        account:account,
        phone:phone,
        captcha:parseInt(captcha),
        type:"phone",
        force:force,
    };

    return AsyncPost_B(dic,"",(data)=>{

        if (successcallback)
            successcallback(data);

    },(data)=>{

        console.log(data);
        failcallback(data);
    })

};


export const fCreateCompanyId =  (email,phone,company_id,successcallback,failcallback)=>{

    let dic = {

        name:"set_company_id",
        email:email,
        phone:phone,
        company_id:company_id
    };

    return AsyncPost_B(dic,"",(data)=>{

        if (successcallback)
            successcallback(data);

    },(data)=>{

        if (failcallback)
            failcallback(data);
    })


};

export const fGetUserResume = (id,callback,failcallback)=>{


    let dic = {

        name:'get_resume_details',
        resume_id:id,
    };

    return dispatch =>{


        return AsyncPost(dic,"",(data)=>{
            
            if (data[0] == 0) {
                dispatch({type: GETUSERRESUME, data:data[1]});
                if (callback){
                    callback(data);
                }
                var countNum = 0;
                if(data[1].name && data[1].age && data[1].gender && data[1].major && data[1].phone && data[1].email){
                    ++countNum;
                } 
                if(data[1].experiences && data[1].experiences.length > 0){
                    ++countNum;
                } 
                if(data[1].educations && data[1].educations.length > 0){
                    ++countNum;
                } 
                if(data[1].objective && data[1].objective.function){
                    ++countNum;
                }
                if(countNum==4){
                    console.log('-------------iHaveDone')
                    dispatch({type: CHECKPROCESS});
                }
            }else{
                console.log(data)
                if (failcallback)
                    failcallback(data)
            }

        },(data)=>{

            console.log(data);
            if (failcallback)
                failcallback(data)
        })
    }

};


export const fModUserResume = (id,body,successcallback,failcallback)=>{


    let dic = {
        name:'mod_resume',
        resume_id : id
    };


    AsyncPost(dic,body,(data)=>{
        if(data[0] == 0){

            if (successcallback){
                successcallback(data);
            }
        }else{

            failcallback();
        }
        

    },(data)=>{

        if (failcallback)
            failcallback();
        console.log(data);
    })


};



export const checkAccountB = (account,callback)=>{

    let url = HOST+VERSION_B+'verify_account?account=' + account + '&nonce=' + fGetNonce() + '&ts=' + fGetLocalTime();

    return fetch(url,{
        method: "get",
        "Content-Type": "application/json",
    })
        .then(response => {
            if (response.ok) {
                response.json().then(json => {

                    if (callback)
                        callback(json)
                })
            } else {
                console.log("status", response.status);
            }
        })
        .catch(error => console.log(error))
};

export const checkAccountC = (account,callback)=>{

    let url = HOST+VERSION+'verify_account?account=' + account;

    return fetch(url,{
        method: "get",
        "Content-Type": "application/json",
    })
        .then(response => {
            if (response.ok) {
                response.json().then(json => {

                    if (callback)
                        callback(json)
                })
            } else {
                console.log("status", response.status);
            }
        })
        .catch(error => console.log(error))
};


export const LoginAutoRegister_C = (phone,successcallback,failedcallback)=>{


    let url = HOST+VERSION+'verify_account?account=' + phone+"&auto_register=1";

    return fetch(url,{
        method: "get",
        "Content-Type": "application/json",
    })
        .then(response => {
            if (response.ok) {
                response.json().then(json => {

                    if (successcallback)
                        successcallback(json)
                })
            } else {
                console.log("status", response.status);

            }
        })
        .catch(error => console.log(error))

}

export const getCaptchaB = (account,callback)=>{

    let url = HOST+VERSION_B+'send_captcha?account=' + account + '&action=reset&nonce=' + fGetNonce()  + '&ts=' + fGetLocalTime();

    return fetch(url,{
        method: "get",
        "Content-Type": "application/json",
    })
        .then(response => {
            if (response.ok) {
                response.json().then(json => {

                    if (callback)
                        callback(json)
                })
            } else {
                console.log("status", response.status);
            }
        })
        .catch(error => console.log(error))
};

export const getCaptchaC= (account,callback)=>{

    let url = HOST+VERSION+'send_captcha?phone=' + account;

    return fetch(url,{
        method: "get",
        "Content-Type": "application/json",
    })
        .then(response => {
            if (response.ok) {
                response.json().then(json => {

                    if (callback)
                        callback(json)
                })
            } else {
                console.log("status", response.status);
            }
        })
        .catch(error => console.log(error))
};

export const verifyCaptchaB= (account,captcha,callback)=>{

    let url = HOST+VERSION_B+'verify_captcha?account=' + account + '&captcha=' + captcha + '&nonce=' + fGetNonce()  + '&ts=' + fGetLocalTime();

    return fetch(url,{
        method: "get",
        "Content-Type": "application/json",
    })
        .then(response => {
            if (response.ok) {
                response.json().then(json => {

                    if (callback)
                        callback(json)
                })
            } else {
                console.log("status", response.status);
            }
        })
        .catch(error => console.log(error))
};

export const verifyCaptchaC= (account,captcha,callback)=>{

    let url = HOST+VERSION+'verify_captcha?account=' + account + '&captcha=' + captcha;

    return fetch(url,{
        method: "get",
        "Content-Type": "application/json",
    })
        .then(response => {
            if (response.ok) {
                response.json().then(json => {

                    if (callback)
                        callback(json)
                })
            } else {
                console.log("status", response.status);
            }
        })
        .catch(error => console.log(error))
};

export const resetPasswordB = (account,password,captcha,callback)=>{
    let sha = hex_sha1("pony-b:" + password);
    let url = HOST+VERSION_B+'reset_password?account=' + account +'&password=' + sha + '&captcha=' + captcha + '&nonce=' + fGetNonce()  + '&ts=' + fGetLocalTime();

    return fetch(url,{
        method: "get",
        "Content-Type": "application/json",
    })
        .then(response => {
            if (response.ok) {
                response.json().then(json => {

                    if (callback)
                        callback(json)
                })
            } else {
                console.log("status", response.status);
            }
        })
        .catch(error => console.log(error))
};

export const resetPasswordC = (account,password,captcha,callback)=>{
    let sha = hex_sha1("pony-b:" + password);
    let url = HOST+VERSION+'app_reset_password?account=' + account +'&password=' + sha + '&captcha=' + captcha + '&from=web';

    return fetch(url,{
        method: "get",
        "Content-Type": "application/json",
    })
        .then(response => {
            if (response.ok) {
                response.json().then(json => {

                    if (callback)
                        callback(json)
                })
            } else {
                console.log("status", response.status);
            }
        })
        .catch(error => console.log(error))
};

/*
export const fGetSearchResult = (oSearchCondition, bLoginStatus) => {
    let sDictName;
    let dict;
    let body;
    let sShorUrl
    if (bLoginStatus) {
        dict = {
            name: 'search_list_job',
            page: oSearchCondition.sNowPage,
            pagesize: 10,
        };
        body = oSearchCondition.message;
        sShorUrl = func.fGetUrl(dict, 1);
    } else {
        dict = {
            name: 'open_search_job_list',
            page: oSearchCondition.sNowPage,
            pagesize: 10,
            from: 'web_register'
        };
        body = oSearchCondition.message;
        sShorUrl = func.fGetUrl(dict, 0);
    }

    let url = apiConfig.host + apiConfig.version + sShorUrl + "&sig=" + func.fGetSig(dict['name'], sShorUrl, body, apiConfig.version);

    return dispatch => {

        return fetch(url, {
            method: 'post',
            "Content-Type": "application/json",
            body: JSON.stringify(body)

        })
            .then(response => {
                if (response.ok) {
                    response.json().then(json => {
                        if (json[0] == 0) dispatch({type: GETSEARCHRESULT, data: json[1]})
                    })
                } else {
                    console.log("status", response.status);
                }
            })
            .catch(error => console.log(error))
    };
};*/
