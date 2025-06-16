console.log('Arithmetic operators');
let a = 10;
let b = 30;
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);// modulus
console.log("a ** 2 = ", a**2);//exponentiation
console.log("b ** 2 = ", b**2);
console.log(a++);//Post increment
console.log(a);// The value of a would be incremented after printing the original value first.
console.log("-------brakes gaadi waala brake hi hai gawaar nhi hun-------")
console.log(a--);//post decrement
console.log(a);
// similarly would be for pre increment and decrement.It would print the decremented or incremented value.

console.log("Next topic----");
let asop = "Assignment Operators: "
console.log(asop.toUpperCase());

//Simple assignment operator "=";
let o = 10;
let s = "string"

//Addition assignment operators
let num = 5;
num += 3// equivalent to num = num + 3
console.log(num);
//---on string
let str = "Hello ";
str += "world";
console.log(str);

// Similarly we can subtraction assignment
let quantity = 50;
quantity -= 25;
console.log(quantity);

//Similarly we have Multiplication assign operator
let price = 20;
price *= 2;
console.log(price);

// next is division assop
let total = 50;
total /= 4;
console.log(total);

//COMPARISON OPERATORS

//"==" operotors termed as loose operators to compare
// compares two values to check the equality and perform type coercion as well to check type equality
//Example:
console.log(5 == 5);//true
console.log(5 == "5")// true// cause values matched and type coerced
console.log(0== false)// true
console.log(null == undefined)//true
console.log( 10 == 20)//false

//"===" strict equality check
console.log(5 === 5)// true
console.log(5 === '5')// false different types:nums vs string
console.log(0 === false);//numbers vs boolean
console.log(null === undefined)// false
console.log(10 === 20)// false


//"!=" loose inequality
console.log(5 != 10);//true
console.log(5 != "5");// false
console.log(0 != false);/////false

//"!==" strick inequality
console.log(5 !== 5); //false
console.log(5 !== "5");//true
console.log(0 !== false); // true


