// Code: 1
// console.log("start");
// const obj = {
//     name: "internshala",
//     fun: function() {
//         setTimeout(() => {
//             console.log("Timeout 1", this.name)
//         }, 1000);
//     }
// }
// obj.fun();
// console.log("End");


//Code : 2
// function greet(message) {
//     return new Promise((resolve, reject) => {
//         if (message === 'hi') resolve(message);
//         else reject("Hmm");
//     });
// }

// const result = greet("Hello")
// .then((data)=> {
//     console.log(data);
// })
// .catch((data) => {
//     console.log(data);
// });

//Code : 3
// function fetchData(url, callback) {
//     console.log("Fetching data from ", url);
//     setTimeout(() => {
//         const data = { name: "john", age: 49};
//         callback(data);
//     }, 1000);
// }
// let value = 10;
// fetchData("https://example.com/api", function (data) {
//     console.log("Data received", data);
//     console.log("Value", value);
// });
// value = 20;


//Code : 4
// function foo() {
//     return "I'm the outer function";
// }
// function test() {
//     console.log(bar);
//     return foo();
//     var bar = "I'm a variable";
//     function foo(){
//         return "I'm the inner function";
//     }
// }
// console.log(test());

//Code : 5
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Error")
//     }, 1000);
// });
// promise
// .then((value)=> console.log("Resolved: ", value))
// .catch((error)=> console.log("Caught: ", error));

//Code : 6
// setTimeout(() => {
//     console.log(1)
// }, 0);
// console.log(2);
// new Promise((res) => {
//     console.log(3);
//     res();
// }) .then(() => console.log(4));
// console.log(5);

//Code : 7
// const myPromise = new Promise((resolve, reject) => {
//     resolve("Success");
//     reject("error");
// });
// myPromise
// .then((result)=> console.log(result))
// .catch((error) => console.log(error));

// code : 8
// async function fetchData() {
//   try {
//     const response = await fetch('your-api-endpoint'); // 'await' for the response
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const jsonData = await response.json(); // 'await' for the JSON data to be parsed
//     console.log(jsonData);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }

// fetchData();

//Code : 9
// function calculateSum(numbers, callback) {
//     setTimeout(() => {
//         const sum = numbers.reduce((acc, curr) => acc + curr, 0);
//         callback(sum);
//     }, 2000);
// }

// function displaySum(result) {
//     console.log("The sum is: ", result);
// }
// calculateSum([1,2,3,4,5], displaySum);

//Code : 10
// function fetchData(processData) {
//     setTimeout(() => processData("Data Received"), 1000);
// }
// function processData(data) {
//     console.log(`Processing data: ${data}`);
// }

// fetchData(processData);

// //Code : 11
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Success");
//     }, 2000);
// });
// myPromise
// .then((result) => console.log(result))
// .catch((error) => console.log(error))
// .finally(() => console.log("Promise Settled"));

// //code; 12
// console.log("Apple");
// setTimeout(() => {
//     console.log("banana");
// }, 0);
// Promise.resolve().then(()=> console.log("Cherry"));
// console.log("Date");

// //Code: 13
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hello")
//     }, 1000);
// });
// promise.then(
//     (value) => console.log("Resolved", value),
//     (reason) => console.log("Rejected", reason)
// );

//code: 14
// let a = true;
// setTimeout(() => {
//     a = false;
// }, 2000);
// while(a) {
//     console.log("---inside while---");
// }

// //Code : 15
// function printNum(arr) {
//     arr.map((data)=> console.log(data));
// }

// function fun(arr) {
//     setTimeout(() => {
//         printNum(arr);
//     }, 1000);
// }
// fun([1,2,3,4,5])

//Code : 16
// const obj = {
//     name: "INTern",
//     course: "Black Ops",
//     fun: function () {
//         return new Promise((res, rej) => {
//             res(this.name);
//             rej(this.course);
//         });
//     },
// };

// const result = obj.fun();
// result.then(function (data){
//     console.log("Data", data);
// })

//Code : 17
// fetch("https://dummyjson.com/products/5")
// .then((response) => response.json())
// .then((json) => console.log("Data: ", json))
// .catch((error) => {
//     console.log("Error:", error);
// })

//Code: 18
// console.log("Start");
// const obj = {
//     name: "Intern",
//     fun: function() {
//         return new Promise((res, rej) => {
//             console.log("INside Promise");
//             res(this.name);
//         });
//     },
// };
// const result = obj.fun();
// result.then(function(data) {
//     console.log("name:", data);
// });
// console.log("ENd");

//Code : 19
// const promise = new Promise ((res, rej) => {
//     setTimeout(() => {
//         res(45);
//     }, 1000);
// });
// promise.then(
//     (value) => console.log("Resolved: ", value),
//     (reason) => console.log("Rejected:", reason)
// )