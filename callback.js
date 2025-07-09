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