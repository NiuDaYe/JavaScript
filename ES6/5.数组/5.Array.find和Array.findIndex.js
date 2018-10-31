
// find 查找元素 和 findIndex 查找元素下标
let arr = ['9',1,'1','3',3,4,5];
let res = arr.findIndex((item,index,array)=>{
  return item == '1';
})
console.log(res,typeof res);    //1 number
