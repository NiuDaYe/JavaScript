'use strict'
//let p = new Promise((resolve,reject)=>{
  //setTimeout(()=>{
    //resolve('通过');//下面就会走then
    //reject('拒绝');//下面就会走catch
  //},3000)
//})
//简写

let p = new Promise((resolve,reject)=>{
  setTimeout(resolve,3000,'通过')
})


p.then((value)=>{
  console.log(value,'成功！！！');//3秒之后resolve之后才then成功
}).catch((err)=>{
  console.error(err,':捕获失败！');
})
