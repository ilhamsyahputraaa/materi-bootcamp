
let user = {
    name: "John",
    age: 30
}

console.log(user);

user.name = "Fiqri Pratama";
console.log(user.name);
console.log(user['age']);

let { name, age } = user;
console.log(`My Name Is ${name} and My age is ${age}`);

for (let prop in user) {
    console.log(prop + ": " + user[prop]);
}

console.log(user);

const student = {
    name: 'Monica',
    class: 7,
    age: 12
}

// using for...in
for (let key in student ) {
    // display the properties
    console.log(`${key} => ${student[key]}`);
}
  

// program login
let username = '1234';
let password = 'passw0rd';
let user = {};

// validate login data
if (username === '1234' && password === 'passw0rd') {
    user = {
        username: username,
        password: password
    };
} else {
    user = null;
}

(user != null) ? console.log(`Welcome ${user.username}`) : console.log(`username or password is wrong`);
