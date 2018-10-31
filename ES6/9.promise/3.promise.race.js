let proimse1 = new Promise((resolve,reject)=>{
    setTimeout(reject,4000,'proimse1');
});

let proimse2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,3000,'proimse2');
});

let proimse3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'proimse3');
});

Promise.race([proimse1,proimse2,proimse3]).then((value)=>{
  console.log(value); //proimse3
}).catch((err)=>{
  console.log(err);
})
