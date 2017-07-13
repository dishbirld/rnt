
import {AsyncPost,AsyncPostNoUsr,AsyncPostNoUsr_B,AsyncPost_B,AsyncGet} from './_utils.js';

import {fExportGetCookieMes,fGetLocalTime,fGetNonce,checkTelePhone,fGetCookieMes} from './common.js';

import {HOST,VERSION,USERID,VERSION_B} from './config.js';

export const fGetCompanyInfo = (successcallback,failcallback)=>{


    let dic = {
        name: 'company_info',
        type:'company'
    };

    AsyncPost(dic,"",(data)=>{

            if (data[0] == 0) {

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

};

export const fGetListJobTemplate = (dict,successcallback,failcallback)=>{


    let dic = {
        name: 'list_job_templet',
        status : 'published'
    };
    let body = {}
    if(dict){
    	body.work_year =dict.work_year;
    	body.function =dict.function;   
 	}

    AsyncPost(dic,body,(data)=>{

            if (data[0] == 0 && data[1]) {

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

};


export const fGetListJob = (successcallback,failcallback)=>{

    let dic = {

        name:"list_job",
        status:'published',
        user_id : fGetCookieMes()
    };

    AsyncPost(dic,"",(data)=>{

            if (data[0] == 0) {

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
    

};


export const fGetOpenSearchJobDetails = (dict,successcallback,failcallback)=>{

    let dic = {

        name:"open_search_job_details",
        id : dict.id
    };
    let body = {
    	id : dict.id
    }

    AsyncPost(dic,body,(data)=>{

            if (data[0] == 0) {

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
    

};

