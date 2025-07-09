// function sumOfAllNumbers(...args) {
//     let sum = 0;
//     for (let value of args) {
//         sum = sum + value;
//     }

//     return sum;
// }
// const result = sumOfAllNumbers(1,2,3,4,5);
// console.log(result);

//exmaple number : 2
//Mixing with named parameters:

// function greetPeople(greetings, ...names) {
//     if (names.length === 0) {
//         return `${greetings} everyone!`;
//     } else {
//         return `${greetings} ${names} !`;
//     }
// }

// console.log(greetPeople("Goodmoring"));
// console.log(greetPeople("hello", "Alice", "bob"));


//Basic syntax goeslike
// function sum(...args){
//     let sum = 0;
//     for (let arg of args) sum += arg;
//     return sum;
// }
// let x = sum(1,2,3,4,5,6,7);
// console.log(x);

// find max using args
// function findMax() {
//     let max = -Infinity;
//     for (let i = 0; i< arguments.length; i++) {
//         if (arguments[i] > max ){
//             max = arguments[i];
//         }
//     }
//     return max;
// }

// x = findMax(1,23,4,3,55,343,2,23,355,4);
// console.log(x);

// // find sum of all numbers
// function sumAll () {
//     let sum = 0;
//     for (let i = 0; i < arguments.length;i++){
//         sum += arguments[i];
//     }
//     return sum;
// }

// y = sumAll(12,42,542,522,522);
// console.log(y);

// let z = x + y;
// console.log(z);
// r = sumAll(z);
// console.log(r);


// This keyword
// Example of 'this' keyword in JavaScript

// const person = {
//     name: "Alice",
//     greet: function() {
//         console.log("Hello, my name is " + this.name);
//     }
// };

// person.greet(); // Output: Hello, my name is Alice

// // 'this' in a regular function (not a method)
// function showThis() {
//     console.log(this);
// }
// showThis(); // In non-strict mode: window (or global object), in strict mode: undefined

// // 'this' in arrow functions
// const obj = {
//     value: 42,
//     show: function() {
//         const arrow = () => {
//             console.log(this.value);
//         };
//         arrow();
//     }
// };
// obj.show(); // Output: 42


// let x = myFunction();
// function myFunction(){
//     return this;
// }
// console.log(x);

// const myDetails = {
//     firstName: "Prakhar",
//     lastName : "Singh",
//     Age: 27,
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     } 
// }
// let x = myDetails.fullName();
// console.log(x);  

// If a function invocation is preceded with the new keyword, it is a constructor invocation.
//Example
// function func(arg1, arg2){
//     this.firstName = arg1;
//     this.lastName = arg2;
// }

// const newFunc = new func("Alia", "bhatt");
// console.log(newFunc);
// console.log(newFunc.firstName);
// console.log(newFunc.lastName)

//The call method is javascript predefined method
// It can be used to invoke a method with an object as an argument
const Person = {
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName: "Alia",
    lastName: "Bhatt"
}

const person2 = {
    firstName: "Katy",
    lastName: "perry"
}

let x = Person.fullName.call(person1);
let y = Person.fullName.call(person2);
console.log(x);
console.log(y);