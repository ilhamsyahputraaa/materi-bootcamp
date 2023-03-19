const _ = require('lodash'); // import from library lodash

// // map array lodash
// let nums = [ 1,2,3,4];

// //num6 / array method js
// // untuk mencecah sebuah array
// nums.map( n => console.log(n));

// // console.log ("--------------------");

// //lodash map
// _.map(nums,n => console.log(n));

// //map obj lodash
// let data = {
//     name : 'fiqri',
//     age : 15
// }

// // data.map( n => console.log(n)); // error  because .map only for array.
// _.map(data, (value,prop) => console.log(prop + " : " + value));




//=====================================================


//lodash map
// _.map(nums, n => console.log(n));

// // // map obj lodash
// // let data = {
//     name : 'Fiqri';
//     age : 15
// }

// data.map(n=> console log (n)); // error because .map only for array.
// _.map(data, (value, prop))

// let arr = [ { n: 1 }, { n: 2 } ];


// // ES6
// console.log('ES6', arr.map(x => x.n)); //dia harus memakai function lagi untuk mengakses key dalam object array arr


// // lodash
// console.log('lodash', _.map(arr, 'n')); // bisa langsung akses key dalam object tanpa menggunakan . lagi



// lodash filter
let users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': true },
    { 'user': 'fiqri', 'age': 36, 'active': false }
];


// ES6
console.log(users.filter(user => user.active));


// lodash
console.log(_.filter(users, 'active')); // referring by property / key

console.log(_.filter(users, ['active', false]));

console.log(_.filter(users, { 'age': 36, 'active': true }));

console.log(_.filter(users, user => user.age > 30 && user.active));