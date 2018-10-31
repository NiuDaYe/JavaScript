
let obj = {
  a:'a',
  b:'b'
}
let arr1 = [1,2,3,obj];
let arr2 = Array.from(arr1);  //es6 复制一个新数组

arr1[0] = 111;
console.log(arr1,arr2)
