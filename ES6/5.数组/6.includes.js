
let arr = [1,2,3,4,NaN];

let res1 = arr.indexOf(NaN);
let res2 = arr.includes(NaN);

console.log(res1); //-1
console.log(res2); //true
