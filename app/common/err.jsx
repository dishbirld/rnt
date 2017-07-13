export const REGISTERERR = [{ret:"该账号已经存在",value:"该账号已存在",key:"accountwarning"},{ret:"错误的验证码",value:"验证码错误",key:"vectwarning"},

                            {ret:"验证码尝试次数过多",value:"验证码尝试次数过多",key:"vectwarning"}];



export const LOGINERR = [{ret:"账号没有注册",value:"该账号未注册",key:'accountwarning'},{ret:"账号或密码错误",value:"账号或密码错误",key:'accountwarning'},
            {ret:"验证码尝试次数过多",value:"验证码尝试次数过多",key:'passwordwarning'},{ret:"错误的验证码",value:"验证码错误",key:'passwordwarning'}]


export const BINDPHONEERR = [{code:-2001,value:"该手机已被注册",key:"phonewarning"},{code:-2002,value:"设置失败",key:"phonewarning"},
                            {code:-2020,value:"该账号已绑手机",key:"phonewarning"},{code:-3,value:"验证码错误或尝试次数过多",key:"vectwarning"}];


export const BINDEMAILERR = [{code:-2003,value:"该邮箱已被注册",key:"emailwarning"},{code:-2004,value:"设置失败",key:"emailwarning"},
                                    {code:-2020,value:"该账号已绑邮箱",key:"emailwarning"},{code:-3,value:"验证码错误或尝试次数过多",key:"vectwarning"}];

export const SETCOMPANYIDERR = [{code:-2018,value:"设置失败",key:"companywarning"},{code:-2019,value:"该企业号已经存在",key:"companywarning"},
                                {code:-2021,value:"该账号已存在企业号",key:"companywarning"}]
