// let company = {
//     name: "samsung",
//     address: {
//         street: "street",
//         city: "Indore",
//         pincode: 232433
//     },
//     printCompanyAdd: function () {
//         console.log(`${this.address.street} ${this.address.city} ${this.address.pincode}`);
//     }
// }
// company.printCompanyAdd();


// // call bind and apply
// // const person = {
// //     name: "tata",
// //     greet: function(greetings, punctuation) {
// //         console.log(greetings + ', ' + this.name + punctuation);
// //     }
// // };
// // const person2 = {
// //     name: 'sitara'
// // };
// // person.greet.call(person2, 'Hello', '!');

// ///
// ///--------------------------------------------------------
// /// 

// // Using apply method
// const person = {
//     name: 'dan',
//     greet: function (greeting, punctuation) {
//         console.log(greeting + ', ' + this.name + punctuation);
//     }
// };
// const person2 = {
//     name: 'van'
// }
// const args = ['Hi', '?']
// person.greet.apply(person2, args);

// //Using bind method
// const human = {
//     name: 'tan',
//     greet: function (greetings, punctuation) {
//         console.log(greetings + ',' + this.name + punctuation);
//     }
// };
// const human2 = {
//     name: 'jan'
// }
// //so we create a new function where we can use bind method to get theoutput
// const greet2human = human.greet.bind(human2);
// greet2human('hi', '?');

// //Example no 2
// class component {
//     constructor() {
//         this.value = 10;
//         // Without .bind(this), 'this' inside handleClick would be undefined or the button element when used as an event listener.

//     }
// }

// consoling a statement using settimeout 
// let content = document.querySelector('.greet-btn');
// console.log(content);

// content.addEventListener('click', function(){
//     setTimeout(() => {
//         alert("hello my name is Prakhar singh");
//     }, 3000);
// });

// const apiUrl = 'https://dummyjson.com/comments';

// async function fetchComments() {
//     try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         const comments = data.comments;
//         console.log('Successfully fetched comments:', comments);

//     } catch (error) {
//         console.error('Error fetching comments:', error);
//     }
// }
// fetchComments();


async function getData() {
    const url = "https://dummyjson.com/comments";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}
getData();