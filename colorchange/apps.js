let redElement = document.querySelector('red-button');
let blueElement = document.querySelector('blue-button');
let greenElement = document.querySelector('green-button');
let bodyElement = document.querySelector('body')

redElement.onclick = function() {bodyElement.style.backgroundColor = 'red'};
blueElement.onclick = function() {bodyElement.style.backgroundColor = 'blue'};
greenElement.onclick = function() {bodyElement.style.backgroundColor = 'green'};

let h1  = document.querySelector('h1');
function icecream() {
    console.log("icecream");
}

function momos() {
    console.log('momos')
}

h1.addEventListener("click", icecream);
h1.addEventListener("click", momos);