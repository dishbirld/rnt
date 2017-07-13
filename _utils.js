/**
 * Created by wuenchen on 2017/6/6.
 */
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
    let shortUrl = func.fGetUrl_B(dict);
    let url = apiconfig.HOST + apiconfig.VERSION_B + shortUrl + "&sig=" + func.fGetSig_B(dict['name'], shortUrl, body,apiconfig.VERSION_B);

    return  fetch(url,{
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
