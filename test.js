/**
 * Created by wuenchen on 2017/6/6.
 */
let [a, c, b] = [1, 3, 4, 5];
console.log(b);
let obj = {};
let arr = [function (x) {

}];

({foo: obj.prop, bar: arr[0]} = {foo: 123, bar: true});
console.log(arr);
var {message: msg = 'Something went wrong'} = {};
console.log(msg)
var {x = 3} = {x: undefined};
console.log(x)
let {log, sin, cos} = Math;
console.log(sin(90))
console.log(arr[0]);
let {toString: len} = "adassda";
console.log(len);