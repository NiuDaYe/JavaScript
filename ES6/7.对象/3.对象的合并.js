
'use strict';

let obj1 = {x:'1'};
let obj2 = {y:'2'};
let obj3 = {x:'3'};

let obj4 = Object.assign(obj1,obj2,obj3);
console.log(obj4) //{x: "3", y: "2"}  合并了obj2里面的y,被obj3里面的x替换.
