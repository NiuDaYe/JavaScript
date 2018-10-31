let arr = [1,3,5,7];

let res1 = arr.keys();
let res2 = arr.entries();

console.log(res1); //ArrayIterator {} 迭代器

for (let item of res1){
  console.log(item) //获取arr的下标  0 1 2 3
}

for (let item of res2){
  console.log(item) //获取arr的下标及值 [1,2] [1,3] [2,5] [3,7]
}
