// function fun(...args) {
//     return {...args};
// }
// const arr = [1,2,3,4,5,6];
// console.log(typeof fun(...arr));

const { useReducer } = require("react");

// var x = 10;
// for(let i = 0; i< 1; i++){
//     let y = x;
//     var x = 30;
//     console.log(x,y);
// }

// let x = 10;
// function fun() {
//     if (!x) {
//         var x = 20;
//     }
//     console.log(x);
// }
// fun();

// const nums = [1,2,3,4,5];
// nums.forEach(function(num) {
//     console.log(num);
// })


//---
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("one"), 1000);
// });
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("two"), 2000);
// });
// const p3 = new Promise ((resolve, reject) => {
//     reject (new Error("reject"));
// });
// Promise.all([p1,p2,p3])
//     .then((values) => {
//         console.log(values);
//     })
//     .catch((error) => {
//         console.log("error occured")
//     })

// class parentClass {}
// class childClass extends parentClass {} 
// if (Object.getPrototypeOf(childClass) === parentClass) {
//     console.log('Value evaluated to true')
// } else {
//     console.log("Value evaluated to false");
//}

// function remindTasks() {
//     setInterval(() => {
//         console.log("don't forget to check your tasks")
//     }, 5000);
// }
// remindTasks();

// console.log(add(5,7));
// const add = (a,b ) => a + b;

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     speak() {
//         console.log(`${this.name} makes a noise`);
//     }
// }

// class Dog extends Animal {
//     constructor(name){
//         super(name);
//     }

//     speak() {
//         console.log(`${this.name} barks`);
//     }
// }

// const d = new Dog("Tyson");
// d.speak();

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve("foo"), 100);
// });
// Promise.all([promise1, promise2, promise3]).then((values)=> {
//     console.log(values);
// });

// var x = 5;
// function test() {
//     console.log (x);
//     var x = 10;
// }
// test();

//---
// var a = true + true + true * 3;
// console.log(a);

// console.log("Starting");
// function doSomething() {
//     return new Promise((resolve , reject) => {
//         console.log("Doing something");
//         setTimeout(() => {
//             console.log("Did something");
//             resolve("https://example.com/");
//         }, 200);
//     })
// }
// doSomething().then(function exec(value){
//     console.log(value);
// });
// console.log("ending");


// for(var i = 1; i <= 5; i++){
//     setTimeout(() => {
//         console.log(i);
//     },1000);
// }

// function foo() {
//     console.log(bar);
//     if (true) {
//         let bar = "hello world";
//     }
// }
// foo();

//just for understanding closures
// function variables() {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     function printVariables() {
//         console.log(a);
//         console.log(b);
//     }
//     return printVariables;
// }
// const myPrint = variables();
// myPrint();

// In javascript callback is a function that is passed as an argument to another function
//Example: fetching user data 

// function fetchData(userId, callback) {
//     console.log(`Fetching data for user Id: ${userId}...`);
//     // simulate an asynchronous operation 
//     setTimeout(() => {
//         const userData = {
//             id: userId,
//             name: "Bob",
//             email: 'abc@gmail.com'
//         };
//         console.log(`Data for userId ${userId} fetched!`);
//         callback(userData);
//     }, 2000);
// }

// function displayUser (user) {
//     console.log("\n --- UserDetails ---");
//     console.log(`ID : ${user.Id}`);
//     console.log(`Name: ${user.name}`);
//     console.log(`Email: ${user.email}`);
//     console.log("------------------")
// }

// console.log("Application started requesting user data....");
// fetchData(1, displayUser);
// console.log('Request Sent. Continuing with other tasks (if any )')

//-----HIGHER ORDER FUNCTIONS 

//PRACTICE

// const fruits = ['apple', 'banana', 'guava'];
// function logFruit(fruit) {
//     console.log(`I love ${fruit}`);
// }
// fruits.forEach(logFruit);