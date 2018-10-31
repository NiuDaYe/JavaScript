
'use strict'
// == 和 === 是相等和严格相等
//Object.is() 是更严格更合理的值相等 两个对象依然是不相等的

console.log(+0 === -0);   //true
console.log(Object.is(+0,-0));  //false

console.log(NaN === NaN); //false
console.log(Object.is(NaN,NaN));  //true

console.log({} === {}); //false
console.log(Object.is({},{}));  //false
