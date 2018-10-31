
// 第七种数据类型  Symbol
let sym = Symbol();
console.log(typeof sym);  //symbol


let sym1 = Symbol('sum');
let sym2 = Symbol('sum');

console.log(sym1 == sym2);    //false
console.log(sym1.toString() == sym2.toString());  //true   不可以参加运算  toString后才可以






//
