// Call backs in javascript are functions passed as arguments to other functions.These functions are then executed after the completion of the outer function or after a specific event occurs
//They are fundamental concept in asynchronous javascript programming, allowing you to control the order of execution in operations that might take time, like fetching data from a server or reading a file.

//Example 1: Simple Asynchronous operation
// This example simulates an asynchronous operation like fetching the data from a server, where we want to perform an action after the data is received.

// function fetchData(callback) {
//     console.log("fetching data...");
//     setTimeout(function(){
//         const data = {id: 1 , name: "Product A", price: 25.99};
//         console.log("Data fetched successfully");
//         callback(data);
//     }, 6000);
// }
// function processData(data){
//     console.log("Processing data: ", data);
//     console.log("Displaying Product name: ", data.name);
// }
// // calling fetchData and passing processData as  a callback
// fetchData(processData);
// console.log("This message appears before the data is fetched because fetchdata is asynchronous.");


//Example 2: Event handling
// const myButton = document.getElementById('myButton');
// const messageDisplay = document.getElementById('message');

// // This is the callback function that will be executed when the button is clicked
// function handleClick() {
//     messageDisplay.textContent = "Button was clicked";
//     console.log("Button click event fired.");
// }

// // Add an event listener to the button, handleclick is the callback.
// myButton.addEventListener('click', handleClick);
// console.log('Page loaded, waiting for button click...');

//Example 3: Array iteration using forEach method
// const numbers = [1,2,3,4,5];
// function logNumber (number, index, array) {
//     console.log(`Index: ${index}, Value: ${number}, Array: ${array}`);
// }

// // for each iterates over all each element and calls the provided callback function for each element
// numbers.forEach(logNumber);
// console.log('\n Using an anonymous function as a callback:')
// numbers.forEach(function(number) {
//     console.log(`Doubled Value : ${number * 2}`);
// });


// Callback hell and pyramid of doom
// callback is a function which is passed as an argument to another function

// function firstFunction(val, callback) {
//     setTimeout(() => {
//         const result =  val + 1;
//         callback(result);
//     }, 2000);
// }
// function secondFunction(val, callback) {
//     const result1 = val + 2;
//     callback(result1);
// }
// function thirdFunction(val, callback) {
//     const result2 = val + 3;
//     callback(result2);
// }
// function doOperation() {
//     let result = 0;
//     result = firstFunction(result);
//     result =secondFunction(result);
//     result = thirdFunction(result);
//     console.log(`result: ${result}`);
// }
// let finalResult = doOperation();
// console.log(finalResult)

// function doOperation() {
//     firstFunction(0, (result)=>{
//         secondFunction(result, (result1) => {
//             thirdFunction(result1, (result2) => {
//                 console.log(result2);
//             });
//         });
//     });
// }

// doOperation();

//Question to solve:Write a JavaScript function processNumbers that:

// Takes an array of numbers and a callback function as arguments.
// The callback function should be applied to each element in the array, and return a new array where result is stored.
// Create a callback function square that takes a number as an argument and Returns the square of the number.

// function processNumbers(numbers, callback) {
//     const resultArray = [];
//     for (let i = 0; i < numbers.length; i++){
//         resultArray.push(callback(numbers[i]));
//     }
//     return resultArray;
// }

// //A callback number that returns the square of the numbers in the array
// function square(num) {
//     return num * num;
// }

// const numbers = [1,2,3,4,5];
// const squareNumbers = processNumbers(numbers, square)
// console.log(squareNumbers);


//========================================================

//Promises
// const promise = new Promise(function(resolve, reject) {
//     let promiseResult;

//     setTimeout(() => {
//         promiseResult = false;
//     }, 2000);

//     if(promiseResult) {
//         resolve("successful")
//     } else {
//         reject("Rejected")
//     }
// });

// //consuming code
// promise.then(result => console.log(result));
// promise.catch(err => console.log(err));


//Practice code: Write a JavaScript function simplePromiseDemo that:
// Returns a Promise.
// Logs "Promise is pending..." immediately when the function is called.
// Simulates a network request using setTimeout to delay the operation by 2 seconds.
// After the delay, resolves the Promise with a success message "Promise fulfilled: Data received!" if the operation is successful.
// After the delay, rejects the Promise with an error message "Promise rejected: Error occurred!" if the operation fails.

// function simplePromiseDemo(shouldSucceed) {
//     return new Promise((resolve , reject) => {
//         console.log("Promise is pending ..."); // log immediately
//         setTimeout(() => {
//             if (shouldSucceed) {
//                 resolve("Promise fulfilled: Data Received!");
//             } else {
//                 reject ("Promise rejected: Error occurred!");
//             }
//         }, 2000);
//     })
// }
// //Case 1 : Promise succeeds
// console.log("===Attempting successful promise---");
// simplePromiseDemo(true) 
//     .then(message => {
//         console.log(message);
//     })
//     .catch(error => {
//         console.log(error);
//     })
// // Case 2: Promise dissolves
// console.log("\n ---Attempting failed promises---");
// simplePromiseDemo(false) 
//     .then(message => {
//         console.log(message);
//     })
//     .catch(error => {
//         console.log(error);
//     });

// Practice problem
/**
//  * Simulates a network request and returns a Promise.
//  * The Promise resolves with a success message or rejects with an error message
//  * after a 2-second delay, based on a simulated success/failure condition.
//  *
//  * @param {boolean} shouldSucceed - A flag to determine if the simulated request should succeed or fail.
//  * @returns {Promise<string>} A Promise that resolves with a success message or rejects with an error message.
//  */
// function fetchData(shouldSucceed) {
//     return new Promise((resolve, reject) => {
//         console.log("Attempting to fetch data...");
//         setTimeout(() => {
//             if (shouldSucceed) {
//                 resolve("Data fetched successfully!");
//             } else {
//                 reject("Error fetching data!");
//             }
//         }, 2000); // 2-second delay
//     });
// }

// /**
//  * Calls the fetchData function and handles its Promise resolution and rejection.
//  * It logs success messages to the console and error messages to the console.
//  *
//  * @param {boolean} simulateSuccess - A flag to pass to fetchData, determining if the simulated fetch should succeed.
//  */
// function processData(simulateSuccess) {
//     console.log(`\n--- Initiating data processing (Simulating success: ${simulateSuccess}) ---`);
//     fetchData(simulateSuccess)
//         .then(message => {
//             console.log("Success:", message); // Log the success message
//         })
//         .catch(error => {
//             console.error("Error:", error); // Log the error message
//         });
// }

// // --- Demonstrate the usage ---

// // Scenario 1: Simulate a successful data fetch
// processData(true);

// // Scenario 2: Simulate a failed data fetch
// // To ensure the messages don't interleave confusingly in the console,
// // we can add a slight delay for the second scenario, though not strictly necessary for Promise behavior.
// setTimeout(() => {
//     processData(false);
// }, 2500); // Start the second scenario slightly after the first one's timeout.

//--------------------------------
//Fetch method

// const promiseObject = fetch("https://dummyjson.com/product");
// console.log(promiseObject);

// promiseObject.then(response => response.json()).then(result => console.log(result));
// promiseObject.catch(err => console.log(err));

//Example 1:
// async function getPosts() {
//     const url = 'https://jsonplaceholder.typicode.com/post';
//     try {
//         //.Initiate the get request
//         const response = await fetch(url);
//         //2. check if the response was successful
//         if(!response.ok) {
//             throw new console.error(`HTTP error!Status : ${response.status}`);
//         }
//         //3. Parse the response body as json
//         const posts = await response.json();
//         // 4. Log the feched data 
//         console.log("Fetched Posts: ");
//         posts.forEach(post => {
//             console.log(`ID: ${post.id}, Title: ${post.title.substring(0, 30)}...`);
//         });
//     } catch (error) {
//         // 5. handles any error that occurred during the fetch process
//         console.error("Error posting posts: ", error);
//     }
// }
// getPosts();


//practice 1: promise.all
// function fetchData1() {
//     // Return a Promise that resolves after 1 second
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data from fetchData1");
//         }, 1000);
//     });
// }

// function fetchData2() {
//     // Return a Promise that resolves after 2 seconds
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data from fetchData2");
//         }, 2000);
//     });
// }

// function fetchData3() {
//     // Return a Promise that resolves after 3 seconds
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data from fetchData3");
//         }, 3000);
//     });
// }

// function fetchAllData() {
//     // Use Promise.all() to execute all fetchData functions concurrently
//     Promise.all([fetchData1(), fetchData2(), fetchData3()])
//         .then((results) => {
//             // Handle the resolved results
//             console.log(results);
//         })
//         .catch((error) => {
//             // Handle any rejected Promise
//             console.log(error);
//         });
// }
// fetchAllData();

// //Practice 2: promise.any
// function fetchData1() {
//     // Return a Promise that rejects after 1 second
//     return new Promise((_, reject) => {
//         setTimeout(() => {
//             reject("Error from fetchData1");
//         }, 1000);
//     });
// }

// function fetchData2() {
//     // Return a Promise that resolves after 2 seconds
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data from fetchData2");
//         }, 2000);
//     });
// }

// function fetchData3() {
//     // Return a Promise that resolves after 3 seconds
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data from fetchData3");
//         }, 3000);
//     });
// }

// function fetchAnyData() {
//     // Use Promise.any() to execute all fetchData functions concurrently
//     Promise.any([fetchData1(), fetchData2(), fetchData3()])
//         .then((result) => {
//             // Handle the resolved result
//             console.log(result);
//         })
//         .catch((error) => {
//             // Handle any rejected Promise
//             console.log(error);
//         });
// }

// fetchAnyData();