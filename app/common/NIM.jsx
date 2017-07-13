import {AsyncPost} from './utils';
import {fGetCookieMes} from './common';
import {USERID} from './config';
export const STARTNIM = (dispatch) => {
    let sImToken;

    let dict = {
        name: 'im_token',
        'refresh': 0,
        'type': 'c'
    };

    AsyncPost(dict, '', (data) => {
        sImToken = data[1]['im_token'];
        let sUid = fGetCookieMes(USERID);
        let sAccount = 'im_app_' + sUid;
        let nim = NIM.getInstance({
            // debug: true,
            appKey: 'd29ee3d749f071fc4bd1041acb5c4f19',
            account: sAccount,
            token: sImToken,
            onconnect: onConnect,
            onwillreconnect: onWillReconnect,
            ondisconnect: onDisconnect,
            onerror: onError,

            oncustomsysmsg: onCustomSysMsg
        });
    });

};

function onConnect() {
    console.log('连接成功');
}
function onWillReconnect(obj) {
    // 此时说明 SDK 已经断开连接, 请开发者在界面上提示用户连接已断开, 而且正在重新建立连接
    console.log('即将重连');
    console.log(obj.retryCount);
    console.log(obj.duration);
}
function onDisconnect(error) {
    // 此时说明 SDK 处于断开状态, 开发者此时应该根据错误码提示相应的错误信息, 并且跳转到登录页面
    console.log('丢失连接');
    console.log(error);
    if (error) {
        switch (error.code) {
            // 账号或者密码错误, 请跳转到登录页面并提示错误
            case 302:
                break;
            // 重复登录, 已经在其它端登录了, 请跳转到登录页面并提示错误
            case 417:
                break;
            // 被踢, 请提示错误后跳转到登录页面
            case 'kicked':
                break;
            default:
                break;
        }
    }
}
function onError(error) {
    console.log(error);
}
function onCustomSysMsg(sysMsg) {
    console.log('收到自定义系统通知', sysMsg);
    let receiveMessage = JSON.parse(sysMsg.content);
    if (receiveMessage.type == 'sys_resume_status_msg') {
        window.changeHeaderState(true);
    }
}

