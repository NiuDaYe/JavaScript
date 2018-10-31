
'use static'

class Widget {

  // 公有方法
  foo (baz) {
    this._bar(baz);
  }

  // 私有方法
  _bar(baz) {
    return this.snaf = baz;
  }

  // ...
}

let aa = new Widget();

console.log(aa.foo('1'));
console.log(aa._bar('2'));
