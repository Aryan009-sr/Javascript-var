//Promises in js

const myPromise = new Promise((resolve, reject) => {
    // simulate an asynchronous operation like fetching data and timeout
    setTimeout(() => {
       const success = true;
       if (success) {
        resolve("Data successfully fetched !");
       } else {
        reject ("Error: Failed to fetch data.")
       }
    }, 2000); // Simulate a 2 second delay
});