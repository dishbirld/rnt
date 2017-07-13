
import * as apiconfig from './config';
import * as func from './common';
/*
* post请求
*
* url:请求路径
* body:请求body
*successCallback:成功回调函数
* failCallback：失败回调函数 可不传
* */
export const AsyncPost=(dict,body,successCallback,failCallback)=>{
    if (typeof(body) == "string" && body != null) {

    } else {
        body = JSON.stringify(body);
    }
    let shortUrl = func.fGetUrl(dict);
    let url = apiconfig.HOST + apiconfig.VERSION + shortUrl + "&sig=" + func.fGetSig(dict['name'], shortUrl, body,apiconfig.VERSION);

    return fetch(url,{
        method: "post",
        "Content-Type": "application/json",
        body: body

    })
        .then(response => {
            if (response.ok) {
                response.json().then(json => {
                    if (json[0]==0&&successCallback)
                        successCallback(json)
                    else {
                        if (failCallback)
                            failCallback(json)
                    }

                })
            } else {
                console.log(response);
                console.log("status", response.status);
                if (failCallback)
                    failCallback(json)
            }
        })
        .catch(error => console.log(error))

};

export const AsyncPostNoUsr_B=(dict,body,successCallback,failCallback)=>{
    if (typeof(body) == "string" && body != null) {

    } else {
        body = JSON.stringify(body);
    }
    let shortUrl = func.fGetUrl_B(dict,0);
    let url = apiconfig.HOST + apiconfig.VERSION_B + shortUrl + "&sig=" + func.fGetSig_B(dict['name'], shortUrl, body,apiconfig.VERSION_B);

    return fetch(url,{
        method: "post",
        "Content-Type": "application/json",
        body: body

    })
        .then(response => {
            if (response.ok) {
                response.json().then(json => {
                    if (json[0]== 0&&successCallback)
                        successCallback(json)
                    else {
                        if (failCallback)
                            failCallback(json)
                    }
                })
            } else {
                console.log("status", response.status);
                if (failCallback)
                    failCallback(json)
            }
        })
        .catch(error => console.log(error))

};



export const AsyncPost_B=(dict,body,successCallback,failCallback)=>{
    if (typeof(body) == "string" && body != null) {

    } else {
        body = JSON.stringify(body);
    }
    let shortUrl = func.fGetUrl_B(dict);
    let url = apiconfig.HOST + apiconfig.VERSION_B + shortUrl + "&sig=" + func.fGetSig_B(dict['name'], shortUrl, body,apiconfig.VERSION_B);

    return fetch(url,{
        method: "post",
        "Content-Type": "application/json",
        body: body

    })
        .then(response => {
            if (response.ok) {
                response.json().then(json => {
                    if (json[0]== 0&&successCallback)
                        successCallback(json)
                    else {
                        if (failCallback)
                            failCallback(json)
                    }
                })
            } else {
                console.log("status", response.status);
                if (failCallback)
                    failCallback(json)
            }
        })
        .catch(error => console.log(error))

};


//时间戳转化
export const formateStr= (formatStr, ctime) =>{
    var now = new Date(parseInt(ctime) * 1000).format(formatStr);
    return now;
}

Date.prototype.format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}



export const AsyncPostNoUsr=(dict,body,successCallback,failCallback)=>{
    if (typeof(body) == "string" && body != null) {

    } else {
        body = JSON.stringify(body);
    }
    let shortUrl = func.fGetUrl(dict,0);
    let url = apiconfig.HOST + apiconfig.VERSION + shortUrl + "&sig=" + func.fGetSig(dict['name'], shortUrl, body,apiconfig.VERSION);

    return fetch(url,{
        method: "post",
        "Content-Type": "application/json",
        body: body

    })
        .then(response => {
            if (response.ok) {
                response.json().then(json => {

                    if (json[0] == 0 && successCallback)
                        successCallback(json)
                    else {

                        if (failCallback)
                            failCallback(json)
                    }
                })
            } else {
                console.log("status", response.status);
                if (failCallback)
                    failCallback(json)
            }
        })
        .catch(error => console.log(error))

};

export const AsyncPostUnload = (dict,body,fSuccessfulCallback,fFailCallback)=>{
    if (typeof(body) == "string" && body != null) {

    } else {
        body = JSON.stringify(body);
    }
    let sShortUrl = func.fGetUrl(dict,0);
    let url = apiconfig.HOST + apiconfig.VERSION + sShortUrl + "&sig=" + func.fGetSig(dict['name'], sShortUrl, body,apiconfig.VERSION);

    return fetch(url,{
        method: "post",
        "Content-Type": "application/json",
        body: body,

    }).then(response => {
            if (response.ok) {
                response.json().then(json => {
                    if (json[0]==0&&fSuccessfulCallback)
                        fSuccessfulCallback(json)
                    else{

                        if (fFailCallback)
                            fFailCallback();
                    }
                }
                )
            } else {
                console.log(response);
                console.log("status", response.status);
            }
        })
        .catch(error => console.log(error))

};


export const AsyncPostUnloadtwo = (dict,body,fSuccessfulCallback,fFailCallback)=>{
    if (typeof(body) == "string" && body != null) {

    } else {
        body = JSON.stringify(body);
    }
    let sShortUrl = func.fGetUrl(dict,0);
    let url = apiconfig.HOST + apiconfig.VERSION_C + sShortUrl + "&sig=" + func.fGetSig(dict['name'], sShortUrl, body,apiconfig.VERSION);

    return fetch(url,{
        method: "post",
        "Content-Type": "application/json",
        body: body
    })
        .then(response => {
            if (response.ok) {
                response.json().then(json => {
                        if (json[0] == 0&&fSuccessfulCallback)
                            fSuccessfulCallback(json);
                        else{
                            if (fFailCallback)
                                fFailCallback();
                        }
                    }
                )
            } else {
                console.log(response);
                console.log("status", response.status);
            }
        })
        .catch(error => console.log(error))

};


/*
 * get
 *
 * url:请求路径
 *successCallback:成功回调函数
 * failCallback：失败回调函数 可不传
 * */
export const AsyncGet=(url,successCallback,failCallback)=>{

    return fetch(url,{
        method: "get",
        "Content-Type": "application/json"

    })
        .then(response => {
            if (response.ok) {
                response.json().then(json => {
                    if (json[0]==0 && successCallback)
                        successCallback(json)
                    else
                        if (failCallback)
                            failCallback(json)
                })
            } else {
                console.log(response);
                console.log("status", response.status);
            }
        })
        .catch(error => console.log(error))

};


//url请求
export const requesturl = (str)=>{
    var fdStart = str.indexOf("beichoo_web");
    if(fdStart == 0){
        return 'channel_web'
    }else if(fdStart == -1){
        return 'beichoo_search'
    }
}

//判断是否认证
export const Authentica = (str)=>{
    var fdStart = str.indexOf("beichoo_web");
    if(fdStart == 0){
        return 'V认证'
    }else if(fdStart == -1){
        return 'noApprove'
    }
}


//分割url数组
export const spliceUrl = (url)=>{
    let arr = url.split('/guide/companyDetails/');
    let arr2 = decodeURIComponent(arr[arr.length-1]).split('&')
    let arr3 = [];
    for (var i = 0;i<arr2.length;i++){
        for (var j = 0;j<arr2[i].split('=').length;j++){
            if (j%2==0){
                arr3.push(arr2[i].split('=')[j+1])
            }
        }
    }
    return(arr3)
}

//20170505时间转换
export const Dataencude = (time)=>{
    let year = time.substring(0,4);
    let mth = time.substring(4,6);
    let day = time.substring(6,8);
    return (year + '-' + mth + '-' + day)
};

//2016-02-21、20160202、2016 02 02、2016/02/02 等时间转换xuzhiyuan

export const getDateTimeStamp = (dateStr)=> {
    if (dateStr.trim().indexOf(" ")>=0){
        return Date.parse(dateStr.trim().replace(/ /gi,"/"));
    }else if (dateStr.trim().indexOf("/")>=0){
        return Date.parse(dateStr.trim())
    }else if (dateStr.trim().indexOf("-")>=0){
        return Date.parse(dateStr.trim().replace(/-/gi,"/"));
    }else{
        let str = Dataencude(dateStr.trim());
        return Date.parse(str.replace(/-/gi,"/"));
    }
};



export const getDateDiff = (dateStr) =>{
    if (dateStr!=null && typeof dateStr != 'undefined' && dateStr.trim() != ''){
        var publishTime = getDateTimeStamp(dateStr)/1000,
            d_seconds,
            d_minutes,
            d_hours,
            d_days,
            d_weeks,
            timeNow = parseInt(new Date().getTime()/1000),
            d,

            date = new Date(publishTime*1000),
            Y = date.getFullYear(),
            M = date.getMonth() + 1,
            D = date.getDate(),
            H = date.getHours(),
            m = date.getMinutes(),
            s = date.getSeconds();
        //小于10的在前面补0
        if (M < 10) {
            M = '0' + M;
        }
        if (D < 10) {
            D = '0' + D;
        }
        if (H < 10) {
            H = '0' + H;
        }
        if (m < 10) {
            m = '0' + m;
        }
        if (s < 10) {
            s = '0' + s;
        }

        d = timeNow - publishTime;

        if(d<0){
            return '数据错误';
        }

        d_weeks= parseInt(d/(86400*7));
        d_days = parseInt(d/86400);
        d_hours = parseInt(d/3600);
        d_minutes = parseInt(d/60);
        d_seconds = parseInt(d);
        if(d_days > 0 && d_days < 7){
            return d_days + '天前';
        }else if(d_days <= 0 && d_hours > 0){
            return '今天'
        }else if(d_hours <= 0 && d_minutes > 0){
            return '今天'
        }else if (d_seconds < 60) {
            return '今天'
        }else if (d_days >= 7 && d_days < 15){
            return d_weeks + '周前'
        }else if (d_days >= 15 && d_days < 30) {
            return "半个月前"
        }else if (d_days >= 30 && d_days<60){
            return '1个月前'
        }else if (d_days >= 60){
            return '2个月前'
        }
    }else{
        return ''
    }
};


/*
export const SyncPost = (url,body)=>{


    return new Promise(function(resolve,reject){

        fetch(url,{
            method: "post",
            "Content-Type": "application/json",
            body: JSON.stringify(body)
        })
            .then(response => {
                if (response.ok) {
                    response.json().then(json => {if (json[0]==0) resolve(json[1])})
                } else {
                    reject(null);
                }
            })
            .catch(error => console.log(error))
    })

};


export const SyncGet = (url)=>{


    return new Promise(function(resolve,reject){

        fetch(url,{
            method: "get",
            "Content-Type": "application/json"
        })
            .then(response => {
                if (response.ok) {
                    response.json().then(json => {if (json[0]==0) resolve(json[1])})
                } else {
                    reject(null);
                }
            })
            .catch(error => console.log(error))
    })

};*/
