
function* genfun(inv){
  let one = yield new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,'one:'+ inv);
  });
  let two = yield new Promise((resolve,reject)=>{
    setTimeout(resolve,500,'two:'+ one);
  });
  let three = yield new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'three:'+ two);
  });
}

let res = genfun('initt');

//console.log(res.next().value);
res.next().value.then((val)=>{
  console.log(val);
  res.next(val).value.then((val)=>{
    console.log(val);
    res.next(val).value.then((val)=>{
      console.log(val);

    })
  });
});
