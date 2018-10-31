
function add(...ary){
  let res = 0;
  for(let i = 0, len = ary.length; i <= len; i++ ){
    res += i;
  }
  return res;
}

let res = add(1,2,3,4,5);
console.log(res);


let arr = [1,10,100,3000];
//let m = Math.max.apply(null,arr);
let m = Math.max(...arr);

console.log(m);
