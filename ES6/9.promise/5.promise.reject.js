
let p1 = Promise.reject('err');
p1.catch((error)=>{
  console.log(error);
})
