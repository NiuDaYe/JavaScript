
'use strict'
//有点像一个函数内部有多个函数，是一个状态机
//generator 生成器
//yield 生成


function* gen(){  //function* 定义一个generator函数
  yield 'hello';
  yield 'ni';
  yield 'hao';

  return 'end';
}
//Genertor 返回的不是一个返回值也不是第一个生成的内容
//迭代器是一个可以遍历的对象
let res = gen();

//console.log(res.next());  //{value: "hello", done: false}
//console.log(res.next());  //{value: "ni", done: false}
//console.log(res.next());  //{value: "hao", done: false}
//console.log(res.next());  //{value: "end", done: true}
//console.log(res.next());  //{value: undefined, done: true} 迭代完了所以done为true

//generator是个迭代器  所以可以用for of来实现；

// for (let item of res) {
//   console.log(item);  //hello ni hao !
// }

console.log([...res]);//["hello", "ni", "hao"]
