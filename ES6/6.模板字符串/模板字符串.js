let a = '我是'
//let es6str = `123${a+'中间数字'}456`; //${}进行转意
let es6str = `123\$\{a+'中间数字'\}456`; //这样转意${}能输出出来

console.log(es6str);


//doT.js小而巧的模板殷勤


//插入的可以是表达式
function jia(x,y){
  return x + y;
}

let num = `1+2=${jia(3,4)}`;
console.log(num);


let isgril = `i am a ${true ? 'gril':'boy'}`;
console.log(isgril)


// 自动类型转换
let typeStr = `${1,2,3}`;
console.log(typeStr);
