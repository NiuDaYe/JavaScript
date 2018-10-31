//块级作用域

for (var i = 0; i < 5; i++) {
  setTimeout(function(){
    console.log(i);
  },2000)
}
// 5   正常的  因为for循环执行完才执行的settimeout

for (let i = 0; i < 5; i++) {
  setTimeout(function(){
    console.log(i);
  },2000)
}
// 0 1 2 3 4


for (var i = 0; i < 5; i++) {
  ;(function(i){
    setTimeout(function(){
      console.log(i);
    },2000)
  })(i);  //前后分号避免与其他代码的冲突

}
//0 1 2 3 4 闭包的方式实现


// 一，var 存在的问题
// 1. 没有块级作用域
// 2.for循环变量共享

//二， let的好处

// 1,块级作用域{}
// 2，不会污染window
//  ls: let a = '1';
//      let b = '123';    //不再window上  不会污染window的全局变量
//      window.b = '456';
// 3，for循环都可以用i
// 4，同一个作用域中  重新定义会报错
//  let a = '123';
//  let a = '345';
// 5，不存在变量的预定义 （不会提前定义）
//
//
