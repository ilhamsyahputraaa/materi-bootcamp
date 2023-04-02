const _ = require('lodash');


let users = [{firstName: "John", lastName:"Doe", age: 28, gender: "Male"},
{firstName: "Jane", lastName:"Doe", age: 5, gender: "Female"},
{firstName: "Jim", lastName:"Carrey", age: 54, gender: "Male"},
{firstName: "Kate", lastName:"Winslate", age: 40, gender: "Female"},
]


// 1. Show firstName all of the users
console.log('1.', _.map(users, 'firstName'));

// 2. Show User Age under 30 and the gender is male
console.log('2.', _.filter(users, user => user.age < 30 && user.gender === "Male"));

// 3. Show user who have firstname That Starts with J

console.log('3.',_.filter(users, user => user.firstName[0] === "J"));


// 4. Show User who have last name that starts with 'D'
console.log('4.',_.filter(users, user => user.lastName[0] === "D"));
