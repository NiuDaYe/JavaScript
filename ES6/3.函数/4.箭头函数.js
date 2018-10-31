let fun1 = function(num){
  return num +1;
}
//let fun2 = (num)=> num +2;
let fun2 = (num)=>{
  return num +2;
}

let res1 = fun1(1);
let res2 = fun2(2);
console.log(res1,res2);


let arr = [1,3,7,9];
let r = arr.map(function(item,index,arr){
  return item*item;
})
let r1 = arr.map((item,index,arr) => {
  return item*item;
})
let r2 = arr.map((item,index,arr) => item*item)

let r3 = arr.map(item => item*item)
console.log(r3);  //1,9,49,81
