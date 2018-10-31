//解构赋值:变量的批量赋值  （把右侧的数据类型赋值到左侧构造的相似的数据类型中）
'use strict';
//let arr = [1,2,3];
//console.log(arr[0])  1
//console.log(arr[1])  2
//console.log(arr[2])  3
//let [a,b,c] = arr;
//console.log(arr); //1 2 3



//let arr = [1,[2.1,2.2],3];
//let [a,[b1],c] = arr;
//console.log(a,b1,c); //1 2.1 3

let arr = [1,2,3,4,5];
// ...扩展运算符
let [a,b,...n] = arr;
console.log(a,b,n)
