// // const cart = {
// //     p001: 2,
// //     p002: 1,
// //     p003: 3
// // };
// // function updateCart(productId, newQuantity) {
// //     cart[productId] = newQuantity;
// // }
// // updateCart("p002", 5);
// // console.log(cart["p002"]);

// // function anotherCaller() {
// //     console.log(`${this.caller} called, too!`);
// // }
// // const call = {
// //     caller: "mom",
// //     anotherCaller: anotherCaller,
// //     says: function() {
// //         console.log(`Hey, ${this.caller} just called.`);
// //     },
// // };
// // let newCall = call.anotherCaller;
// // newCall();


// // const userProfile = {
// //     name: "John Doe",
// //     age: 30,
// //     email: "John@example.com",
// //     location: { city: "New York", state: "NY", country: "USA"},
// // };
// // console.log(userProfile.name);
// // console.log(userProfile["location"]["city"]);

// // function outerFunction() {
// //     const innerFunction = () => {
// //         console.log(this);
// //     };
// //     innerFunction();
// // }
// // const obj = {
// //     name: "Alice",
// //     outerFunction: outerFunction
// // };
// // obj.outerFunction();

// // class Person {
// //     constructor(name) {
// //         this.name = name;
// //     }
// //     greet() {
// //         console.log("Hello, " + this.name + "!");
// //     }
// // }
// // class student extends Person {
// //     constructor(name, major) {
// //         super(name);
// //         this.major = major;
// //     }
// //     greet() {
// //         super.greet();
// //         console.log("Hey, Welcome to " + this.major + " major!");
// //     }
// // }
// // let Student = new student("Alice", "Computer Science");
// // Student.greet();


// // class Post {
// //     constructor(text) {
// //         this.text = text;
// //         this.comments = [];
// //     }
// //     addComment(comment) {
// //         this.comments.push(comment);
// //     }
// //     renderComment(comment) {
// //         const renderAuthor = () => {
// //             return `<div>${comment.author.name} <img src="${comment.author.avatar}"/></div>`;
// //         };
// //         return `<div>${comment.text} - ${renderAuthor()}</div>`;
// //     }
// // }
// // const post = new Post("This is a new post!");
// // const comment = {
// //     text: "Great post!",
// //     author: {
// //         name: "John Doe",
// //         avatar: "https://example.com/avatar.jpg",
// //     },
// // };
// // post.addComment(comment);
// // console.log(post.renderComment(comment));

// // function fun() {
// //     let x = 10;
// //     return (gun = function() {
// //         return x + 1;
// //     });
// // }
// // const obj = {name: "John"};
// // obj.__proto__ = fun;
// // const ans = obj.__proto__();
// // console.log(ans());

// const car = {
//     make: "Toyota",
//     model : "Camry",
//     year: 2020,
// };
// console.log(car.make);
// console.log(car["model"]);

// const key = "name";
// const obj = {
//     name: "Alice",
    
// }
// console.log(obj[key]);
// console.log(obj["key"]);

function step1() {
    console.log("Please wait I am selecting the image");

    return new Promise(function (resolve, reject){
        setTimeout(function(){
            resolve("selected image");
        }, 2000);
    });
}
function step2(image) {
    console.log("Please wait I am applying the filter");
    return new Promise(function (resolve, reject){
        setTimeout(function(){
            resolve(image + " with filter applied");
        }, 2000);
    });
}

step1()
.then(function(image) {
    console.log(image);
    return step2(image);
})
.then(function(filter){
    console.log(filter);
})