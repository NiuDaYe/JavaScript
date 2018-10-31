'use strict';

let obj = {
  a:'a',
  b:'b',
  c:'c',
  arr:[1,2,3]
}

//let {x,y,z} = obj;
//console.log(x,y,z);  //underfind underfind underfind  为什么都是underfind呢  因为对象是无序的  不能保证x就对应a;

//let {a,b,c} = obj;
//console.log(a,b,c);   //a,b,c

//let {a:mya,b:myb,c:myc,arr:[ , ,x]} = obj;
//console.log(mya,myb,myc,x)  //a,b,c,3
