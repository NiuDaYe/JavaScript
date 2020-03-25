class People{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){
        alert(`${this.name} 吃饭`);
    }
    speak(){
        alert(`${this.name}的年龄是${this.age}`)
    }
}

class Student extends People {
    constructor(name,age,number){
        super(name,age);
        this.number = number;
    }
    study(){
        alert(`${this.name} study`)
    }
}

let xiaoniu = new Student('小牛','18','A1');
xiaoniu.study();
xiaoniu.eat();
alert(xiaoniu.age)