
//let y = new Set(['a','b','c']);

//let arr = [...y];

//console.log(arr); //["a", "b", "c"]

//数组去重

//let x = [1,1,1,1,2,2,4,4,5,5,5];
//let q = new Set(x);   //数组放进q
//console.log(q);       //给q去重 [1,2,4,5]
//let z = Array.from(q);//去重后放进z里面
//console.log(z)        //[1,2,4,5]


//x = Array.from(new Set(x));
//console.log(x);


//Set实现js中的集合运算
//集合运算有三种 并集 交集 差集

let a1 = new Set([1,3,5,7]);
let a2 = new Set([1,2,3,4]);

//并集
//let bj = new Set(a1,a2);
//let bj = new Set([...a1,...a2]);
//console.log(bj);  //{1, 3, 5, 7}  合并去重了

//交集
//let qq = new Set([...a1].filter(item=> a2.has(item)));
//console.log(qq) //[1,3]

//差集
let cj1 = new Set([...a1].filter(item => !a2.has(item)));
console.log(cj1);//{5, 7} a1有a2没有的

let cj2 = new Set([...a2].filter(item => !a1.has(item)));
console.log(cj2);//{2, 4} a2有a1没有的
