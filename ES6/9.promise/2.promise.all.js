
let proimse1 = new Promise((resolve,reject)=>{
    setTimeout(reject,1000,'proimse1');
});

let proimse2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,3000,'proimse2');
});

let proimse3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'proimse3');
});


Promise.all([proimse1,proimse2,proimse3])
.then((value)=>{
  console.log(value); //["proimse1", "proimse2", "proimse3"]
  debugger;
}).catch((err)=>{
  console.log(err);
})
