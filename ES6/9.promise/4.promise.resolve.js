//
// let p1 = new Promise((resolve,reject)=>{
//   setTimeout(resolve,1000,'成功！');
// })
//
let p2 = Promise.resolve(p1);
p2.then((value)=>{
  console.log(value); //成功！
})

console.log('123');

//类promise对象
// let thenobj = {};
// thenobj.then = (resolve,reject)=>{
//   setTimeout(resolve,1000,'成功！');
// }
//
// let p1 = Promise.resolve(thenobj);
// p1.then((value)=>{
//    console.log(value); //成功！
// })

// let p1 = Promise.resolve();
// p1.then((value)=>{
//   console.log(value); //undefined
//   //debugger;
// })
