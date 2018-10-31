
let p1 = Promise.resolve('chenggong');
p1.then((value)=>{
  console.log(value); //后执行  因为then是处理异步的；
})
console.log('saaadfsadf'); //先执行


let p2 = new Promise((resolve,reject)=>{
  console.log('inpromise');   //1
  resolve('chenggongle');
});
p2.then((value)=>{
  console.log(value);   //3
});
console.log('outpromise');    //2
setTimeout(()=>{
  console.log('settimeout');    //4
},0);
