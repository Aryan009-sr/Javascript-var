// function step1() {
//     console.log("Please wait I am selecting the image");

//     return new Promise(function (resolve, reject){
//         setTimeout(function(){
//             resolve("selected image");
//         }, 2000);
//     });
// }
// function step2(image) {
//     console.log("Please wait I am applying the filter");
//     return new Promise(function (resolve, reject){
//         setTimeout(function(){
//             resolve(image + " with filter applied");
//         }, 2000);
//     });
// }

// function step3(caption) {
//     console.log("Please wait I am adding the caption");
//     return new Promise(function (resolve, reject){
//         setTimeout(function(){
//             resolve(caption + " with caption added");
//         }, 3000);
//     });
// }

// function step4(uploadImage) {
//     console.log("Please wait I am uploading the image");
//     return new Promise(function (resolve, reject){
//         setTimeout(function(){
//             return resolve(uploadImage + " uploaded successfully");
//         }, 5000);
//     })
// }

// step1()
// .then(function(image) {
//     console.log(image);
//     return step2(image);
// })
// .then(function(filter){
//     console.log(filter);
//     return step3(caption)
// })
// .then(function(caption){
//     console.log(caption);
//     return step3(caption);
// })
// .then(function(uploadImage){
//     console.log(uploadImage);
   
// })

// Corrected code
// function step1() {
//     console.log("Please wait I am selecting the image");
//     return new Promise(function (resolve, reject){
//         setTimeout(function(){
//             resolve("selected image");
//         }, 2000);
//     });
// }

// function step2(image) {
//     console.log("Please wait I am applying the filter");
//     return new Promise(function (resolve, reject){
//         setTimeout(function(){
//             resolve(image + " with filter applied");
//         }, 2000);
//     });
// }

// function step3(caption) {
//     console.log("Please wait I am adding the caption");
//     return new Promise(function (resolve, reject){
//         setTimeout(function(){
//             resolve(caption + " with caption added");
//         }, 3000);
//     });
// }

// function step4(uploadImage) {
//     console.log("Please wait I am uploading the image");
//     return new Promise(function (resolve, reject){
//         setTimeout(function(){
//             return resolve(uploadImage + " uploaded successfully");
//         }, 5000);
//     });
// }

// step1()
// .then(function(image) {
//     console.log(image);
//     return step2(image); // Correct: returns the promise from step2
// })
// .then(function(filter){
//     console.log(filter);
//     return step3(filter); // Correct: returns the promise from step3, passing 'filter' as the argument
// })
// .then(function(captionWithFilter){ // Renamed for clarity, this now receives the result of step3
//     console.log(captionWithFilter);
//     return step4(captionWithFilter); // Correct: returns the promise from step4, passing the result
// })
// .then(function(finalUploadMessage){
//     console.log(finalUploadMessage);
// })
// .catch(function(error) {
//     console.error("An error occurred:", error);
// });


// Code using async - await
// function step1() {
//     console.log("Please wait I am selecting the image");
//     return new Promise(function (resolve, reject){
//         setTimeout(function(){
//             resolve("selected image");
//         }, 2000);
//     });
// }

// function step2(image) {
//     console.log("Please wait I am applying the filter");
//     return new Promise(function (resolve, reject){
//         setTimeout(function(){
//             resolve(image + " with filter applied");
//         }, 2000);
//     });
// }

// function step3(caption) {
//     console.log("Please wait I am adding the caption");
//     return new Promise(function (resolve, reject){
//         setTimeout(function(){
//             resolve(caption + " with caption added");
//         }, 3000);
//     });
// }

// function step4(uploadImage) {
//     console.log("Please wait I am uploading the image");
//     return new Promise(function (resolve, reject){
//         setTimeout(function(){
//             return resolve(uploadImage + " uploaded successfully");
//         }, 5000);
//     });
// }

// // Main function to orchestrate the steps using async/await
// async function processImage() {
//     try {
//         // Await pauses the execution of this function until the promise resolves
//         const image = await step1();
//         console.log(image);

//         const filter = await step2(image);
//         console.log(filter);

//         const captionWithFilter = await step3(filter); // 'filter' is the result from step2
//         console.log(captionWithFilter);

//         const finalUploadMessage = await step4(captionWithFilter); // 'captionWithFilter' is the result from step3
//         console.log(finalUploadMessage);

//     } catch (error) {
//         // Catch any errors that occur in any of the awaited promises
//         console.error("An error occurred during image processing:", error);
//     }
// }

// // Call the async function to start the process
// processImage();


// async function sam2(){
//     console.log(1);
//     let resp = await  fetch('https://jsonplaceholder.typicode.com/todos/1');
//     console.log(resp, "api2");
//     console.log(2);   
//     console.log(3);

// };
// console.log(10000);
// sam2();
// console.log(20000);

// const API  = "https://jsonplaceholder.typicode.com/todos";
// fetch(API)
// .then((d)=> {
//     return d.json();
// })
// .then((resp)=>{
//     console.log(resp, "resp");
// })
// .catch((e)=>{
//     console.log(e, "catch")
// })


// const API  = "https://jsonplaceholder.typicode.com/todos";
// async function calling (){
//     const data = await fetch(API);
//     const response = await data.json();
//     console.log(response);
// }

// calling();

import axios from "axios";
const API = 'https://jsonplaceholder.typicode.com/todos';

axios.get(API)
.then ((resp) => {
    console.log(resp.data, "entire data");
})
.catch((err)=>{
    console.log(err);
})

//
// async function calling(){
//     const resp=await axios.get(API);
//     console.log(resp.data);
// }
// calling()

const API2 = "https://api.tvmaze.com/search/shows?q=girls"
axios.get(API2)
.then ((score) => {
    console.log(score.data, "score")
})
.catch((err)=>{
    console.log(err);
})