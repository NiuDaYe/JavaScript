
function func(){
  //setTimeout(function(){
    //console.log(this.id); //dengfind
  //})

  setTimeout(()=>{
    //console.log(this.id);  //这是id
  })
}

let obj = {
  id:'这是id'
}

func.call(obj);


var obj1 = {
  id:'123',
  func1:function(){
    setTimeout(function(){
      console.log(this.id);
    })
  },
  func2:function(){
    setTimeout(()=>{
      console.log(this.id);
    })
  },
  func3:()=>{
    setTimeout(()=>{
      console.log(this.id);
    })
  }
}

obj1.func1();
obj1.func2();
obj1.func3();
