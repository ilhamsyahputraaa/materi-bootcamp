// function constructor and class can be used to create a object
// constructor function
// function Person(name) {
//     // assigning  parameter values to the calling object
//     this.name = name;
//     // defining method
//     this.greet =  function()  {
//         return 'Hello ' + this.name;
//     }
// }
// let john = new Person('John'); // new : menginstansiasi classs menjadi object
// console.log(john);
// console.log(john.greet());



// ================================================================



//class
class Person {
    // private property
    #id;
    constructor(name, age) {
        // public property
        this.name = name;
        this.age = age;
    }
    setId(id) {
        this.#id = id;
    }
    getId() {
        return this.#id;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    // setter getter
    setAge = (age) => this.age = age;
    getAge = () => this.age;
    // defining method
    greet() {
        console.log(`Hello ${this.name}`);
    }
}


// keyword new used to create a new instance object
let john = new Person('John', 10);
john.setId('1234');


// accessing property
console.log(john);


// accessing method
john.greet();  // Hello John
john.setAge(17);
console.log(john.getAge());

let pratama = new Person('Pratama');
pratama.greet();
console.log(pratama.getName());
pratama.setAge(17);
console.log(pratama);

let ilham = new Person ('Ilham', 25);
console.log(ilham);
ilham.greet();





//==========================================================




// contoh motorcycle

class Motorclycle {
    constructor(name, color, years) {
        this.name = name;
        this.color = color;
        this.years = years;
    }
    showMotoDescription() {
        console.log(`Motorcycle ${this.name} with color ${this.color} and made in year ${this.years}`);
    }
}
let mio = new Motorclycle('Mio J', 'red', 2015);
console.log(mio);
mio.showMotoDescription();





//====================================================