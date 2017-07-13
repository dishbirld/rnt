import * as apiConfig from './config'

export const uuid = () => {
    return Math.random().toString(36).substring(3, 8)
};

export const fGetSig = (name, url, body, version) => {
    let sig = "";
    let key_values = url.substring(url.indexOf('?') + 1).split('&');
    let keys = [];
    let map = {};
    for (let i = 0; i < key_values.length; i++) {
        let k_p = key_values[i].split('=');
        keys[i] = k_p[0];
        map[k_p[0]] = k_p[1];
    }
    keys.sort();
    let sigStr = '';
    for (let i = 0; i < keys.length; i++) {
        sigStr = sigStr + keys[i] + '=' + map[keys[i]] + "&";
    }
    sigStr = version + name + "?" + sigStr;

    if (body == "" || body == null || body == "null") {
        sig = hex_sha1(fUtf16to8(sigStr + fGetCookieMes(apiConfig.TOKEN)));
    } else {
        sig = hex_sha1(fUtf16to8(sigStr + body + "&" + fGetCookieMes(apiConfig.TOKEN)));
    }
    return sig;

};


/*export const fGetSig_B = (name, url, body, version) => {
 let sig = "";
 let key_values = url.substring(url.indexOf('?') + 1).split('&');
 let keys = [];
 let map = {};
 for (let i = 0; i < key_values.length; i++) {
 let k_p = key_values[i].split('=');
 keys[i] = k_p[0];
 map[k_p[0]] = k_p[1];
 }
 keys.sort();
 let sigStr = '';
 for (let i = 0; i < keys.length; i++) {
 sigStr = sigStr + keys[i] + '=' + map[keys[i]] + "&";
 }
 sigStr = version + name + "?" + sigStr;

 if (body == "" || body == null || body == "null") {
 sig = hex_sha1(fUtf16to8(sigStr + fGetCookieMes(apiConfig.TOKEN_B)));
 } else {
 sig = hex_sha1(fUtf16to8(sigStr + body + "&" + fGetCookieMes(apiConfig.TOKEN_B)));
 }
 return sig;

 };*/


export const fGetLocalTime = () => {

    return Date.parse(new Date()) / 1000;
}


export const fGetUrl = (dict, state = 1) => {//state为是否登录,登录状态为1,未登录状态为0

    let url = '';
    for (let keys in dict) {
        if (dict.hasOwnProperty(keys)) {

            if (keys == 'name') {
                url = dict['name'] + '?'
            } else {
                url = url + keys + '=' + dict[keys] + '&'
            }

        }
    }


    let user_id = fGetCookieMes(apiConfig.USERID);
    let ts = fGetTs();

    let nonce = fGetNonce();

    if (state) {
        url = url + 'user_id=' + user_id + '&ts=' + ts + '&nonce=' + nonce;
    } else {
        url = url + 'ts=' + ts + '&nonce=' + nonce;
    }
    return url
};

/*
 export const fGetUrl_B = (dict, state = 1) => {//state为是否登录,登录状态为1,未登录状态为0

 let url = '';
 for (let keys in dict) {
 if (dict.hasOwnProperty(keys)) {

 if (keys == 'name') {
 url = dict['name'] + '?'
 } else {
 url = url + keys + '=' + dict[keys] + '&'
 }

 }
 }


 let user_id = fGetCookieMes(apiConfig.USERID_B);

 let ts = fGetTs();

 let nonce = fGetNonce();

 if (state) {
 url = url + 'user_id=' + user_id + '&ts=' + ts + '&nonce=' + nonce;
 } else {
 url = url + 'ts=' + ts + '&nonce=' + nonce;
 }
 return url
 };
 */

export const fGetCookieMes = (key) => {
    storage.load({
        key: key,
        // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
        autoSync: true,
        // syncInBackground(默认为true)意味着如果数据过期，
        // 在调用sync方法的同时先返回已经过期的数据。
        // 设置为false的话，则等待sync方法提供的最新数据(当然会需要更多时间)。
        syncInBackground: true,
        // 你还可以给sync方法传递额外的参数
        syncParams: {
            extraFetchOptions: {
                // 各种参数
            },
            someFlag: true,
        },
    }).then(ret => {
        // 如果找到数据，则在then方法中返回
        // 注意：这是异步返回的结果（不了解异步请自行搜索学习）
        // 你只能在then这个方法内继续处理ret数据
        // 而不能在then以外处理
        // 也没有办法“变成”同步返回
        // 你也可以使用“看似”同步的async/await语法
        console.log(ret.key);
        return ret.key;
    }).catch(err => {
        //如果没有找到数据且没有sync方法，
        //或者有其他异常，则在catch中返回
        console.warn(err.message);
        switch (err.name) {
            case 'NotFoundError':
                // TODO;
                break;
            case 'ExpiredError':
                // TODO
                break;
        }
    })
    /*let strCookie = document.cookie;
    strCookie = strCookie.replace(/\s/g, "");
    let arrCookie = strCookie.split(';');
    for (let i = 0; i < arrCookie.length; i++) {
        let arr = arrCookie[i].split("=");
        if (key == arr[0] && arr[1] != '') {
            return arr[1];
        }
    }

    return ""*/
};


const fSetCookieMes = (key, val) => {

    var date = new Date();
    var expiresDays = 30;
    //将date设置为10天以后的时间
    date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000);
    //将userId和userName两个cookie设置为10天后过期
    document.cookie = key + "=" + val + ";expires=" + date.toGMTString();
}
export const fExportGetCookieMes = (key) => {

    let strCookie = document.cookie;
    strCookie = strCookie.replace(/\s/g, "");
    let arrCookie = strCookie.split(';');
    for (let i = 0; i < arrCookie.length; i++) {
        let arr = arrCookie[i].split("=");
        if (key == arr[0] && arr[1] != '') {
            return arr[1];
        }
    }

    return ""
};

export const fExportSetCookieMes = (key, val) => {

    var date = new Date();
    var expiresDays = 30;
    //将date设置为10天以后的时间
    date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000);
    //将userId和userName两个cookie设置为10天后过期
    document.cookie = key + "=" + val + ";expires=" + date.toGMTString();
};

export const fGetNonce = () => {
    let nonce = '';
    for (let i = 0; i < 6; i++) {
        nonce = nonce + Math.floor(Math.random() * 10);
    }
    return nonce;
};

export const fExportGetNonce = () => {
    let nonce = '';
    for (let i = 0; i < 6; i++) {
        nonce = nonce + Math.floor(Math.random() * 10);
    }
    return nonce;
};

export const fGetTs = () => {
    let getTs = fGetCookieMes('ts') || 0;
    return parseInt(new Date().getTime() / 1000 - getTs);
};

export const fUtf16to8 = (str) => {
    let out, i, len, c;
    out = "";
    len = str.length;
    for (i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if ((c >= 0x0001) && (c <= 0x007F)) {
            out += str.charAt(i);
        } else if (c > 0x07FF) {
            out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
            out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        } else {
            out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        }
    }
    return out;
};


export const checkTelePhone = (s) => {


    var reg = /^1[3|4|5|7|8][0-9]{9}$/;
    var reg1 = /^0[0][0-9]{10}$/;

    if (reg.test(s) == true) {

        return true
    }
    else if (reg1.test(s) == true) {

        return true

    } else {

        return false
    }
};

export const checkEmail = (email) => {
    let emailPatten = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);

    if (!email) {
        return 1
    } else if (!emailPatten.test(email)) {
        return 2
    } else {
        return 0;
    }
};

export const checkCompanyId = (companyid) => {
    let pattern_letter = new RegExp(/[a-zA-Z]/);

    if (!pattern_letter.test(companyid.substr(0, 1))) {
        return false;
    }

    let pattern = new RegExp(/^[\w]{6,18}$/);
    return pattern.test(companyid);

};


export const checkPassword = (password) => {
    let pswPatten = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$).{8,16}$/);

    return pswPatten.test(password);
};

export const getPeriod = (obj, index) => {

    return obj[index] ? obj[index] : "";

}