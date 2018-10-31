let p1 = new Promise((resolve,reject)=>{
  setTimeout(resolve,1000,'chenggongle');
})

p1.then((value)=>{
  console.log('1then',value);
  return 111; //传给下一个then
}).then((value)=>{
  console.log('2then',value);
  return Promise.reject('1err');//传给下一个catch
}).catch((err)=>{
  console.error('1catch',err);
  return Promise.resolve('3then') //传给下一个then
}).then((value)=>{
  console.log(value)
})
