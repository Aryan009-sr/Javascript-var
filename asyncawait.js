// async and await are modern javascript keywords that make asynchronous code look and behave more like synchronous code.
//They were introduced to simplify the use of promises, providing much cleaner and more readable syntax for handling asynchronous operations

const { Profiler } = require("react");

//Before async await handling complex asynchronous flows always involved
//1. Callback hell or pyramid of doom
// Nested callbacks become very difficult to read, understand and maintain, especially with multiple asynchronous steps
//2. Promise chaining : 
//While better than callbacks, long promise chains with multiple .then(), calls could still be somewhat verbose and less intuitive to read for sequential operations


//Example 1: basic asynchronous operations
// lets simulate fetching some data with a delay

// function simulateFetch(data, delay) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(data);
//         }, delay);
//     });
// }
// function getDataWithPromises() {
//     console.log("Fetching data with Promises...");
//     simulateFetch("User List", 2000) // Fetch user list after 2 seconds
//         .then(users => {
//             console.log("Received:", users);
//             return simulateFetch("User Profile for John Doe", 1500); // Then fetch profile after 1.5 seconds
//         })
//         .then(profile => {
//             console.log("Received:", profile);
//             console.log("All data fetched (Promises).");
//         })
//         .catch(error => {
//             console.error("Error fetching data (Promises):", error);
//         });
// }
// getDataWithPromises();
// console.log("This message appears immediately after starting Promise chain.");

// lets try using same example using async and await
// function simulateFetch(data, delay) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(data);
//         }, delay);
//     });
// }

// async function getDataWithAsyncAwait() {
//     try {
//         console.log("Fetching data with async/await...");

//         // Pause execution here until the first promise resolves
//         const users = await simulateFetch("User List", 2000);
//         console.log("Received:", users);

//         // Pause execution here until the second promise resolves
//         const profile = await simulateFetch("User Profile for John Doe", 1500);
//         console.log("Received:", profile);

//         console.log("All data fetched (async/await).");

//     } catch (error) {
//         console.error("Error fetching data (async/await):", error);
//     }
// }

// getDataWithAsyncAwait();
// console.log("This message appears immediately after calling async function.");

//Error handling using promises
function simulateFailingFetch(shouldFail) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject("Network error occurred");
            } else {
                resolve("Data fetched successfully.");
            }
        }, 3000);
    })
}

function HandleErrorWithPromises(){
    console.log("\n --handling error with promises---");
    simulateFailingFetch(true)
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error("Caught error Promises.", error);
        });

    simulateFailingFetch(false)
        .then(data => {
            console.log("Successful (promises)", data);
        })
        .catch (error => {
            console.log("Caught error.", error);
        })
}

HandleErrorWithPromises();
console.log("This message appears just for fun.")