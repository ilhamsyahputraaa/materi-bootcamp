// function
// program to print a text
// declaring a function

// function greet(){
//     console.log('Hello There!');
// }
// // calling the function
// greet();


//=====================================================

//function parameter
// program to print the text
// declaring a function

// function greetWithParameters(name){
//     console.log(`Hello ${name}`);
// }


//variable name can be different 
//let name = "Pratama"'

// // Calling function
//greetWithParameters(name);
// greetWithParameters("Sahlan");
// greetWithParameters("Fadel");
// greetWithParameters("Rafi");
// function showUser(name, age) {
//     console.log(`hello my name is ${name} and my age is ${age}`);
// }


// showUser("Jajan", 15);
// let names = ["Pratama", "Sahlan", "Fadel", "Rafi", "Arif"];
// names.map((name) => {
//     greetWithParameters(name);
// });



//======================================================================

// function return
// program to sdd teo numbrtd
//declareing a function

// function add(a,b){
//     return a+b;
// }

// // take inputfrom user
// let number1= 70;
// let number2 = 50;

// //calling function
// let result = add(number1,number2);

// //display the result
// console.log("The sum is"+ result);


// ===============================================================================

// funtion expression
// programed to find the square of a number
//function is declared inside the variable

// let multiplication = function(num){ return num * num};
// console.log(multiplaction(4));

// // can be used as variable value for other variables
// let result = multiplication(3);
// console.log(result);


//================================


// // arrow function
// let greetArrow = () => {
//     console.log('Hello')
// };
// greetArrow(); //hello


//================================


// // x is param
// let greetArrowWithParam = x => console.log(x);
// greetArrowWithParam('Hello'); // Hello


// //kalo mau pake kurwal  itu harus pake return, 
// //kalo pun cuman satu baris mending gausah pake kurwal
// let multiplication2 = (num1, num2) => num1 * num2;

// console.log(multiplication2(2,4));


// =================================================================================


//callback  function


// //function
// let greetCallback = (name, callback) => {
//     console.log('Hi '+ name);
//     callback();
// }

// //callback function
// let callMe = () => {
//     console.log( 'I am callback function');
// }

// let showFiqri = (name) => console.log(name);

// //passing function as an adgument or param
// greetCallback('Peter', callMe);
// greetCallback('Fiqri' , showFiqri);


//================================

//exercise


// let calculator = (symbol,num1,num2) => {
//     if (symbol === "*"){
//         return num1*num2;
//     } else if (symbol === "-"){
//         return num1-num2;
//     } else if(symbol === "/"){
//         return num1/num2;
//     }
// }

// console.log(calculator("*", 20, 5));
// console.log(calculator("-", 20, 5));
// console.log(calculator("/", 20, 5));




// let multiplication = function(num){ return num * num};
// console.log(multiplaction(4));

// let multiplication2 = (num1, num2) => num1 * num2;



// code exercise day 6 