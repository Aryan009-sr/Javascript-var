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
// })
// .then(function(caption){
//     console.log(caption);
//     return step3(caption);
// })
// .then(function(uploadImage){
//     console.log(uploadImage);
//     return step4(uploadImage);
// })


async function sam2(){
    console.log(1);
    let resp = await  fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(resp, "api2");
    console.log(2);   
    console.log(3);

};
console.log(10000);
sam2();
console.log(20000);