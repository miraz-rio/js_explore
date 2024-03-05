var bananaPrice = 5;
console.log(bananaPrice);
// for string use ""
bananaPrice = "Janina"
console.log(bananaPrice);
// find the type of variable, write typeof
console.log(typeof bananaPrice);

var promise = "A Promise is a proxy for a value";
console.log(promise.toLowerCase());
// for upperCase
console.log(promise.toUpperCase());
// for find position 
console.log(promise.indexOf("is"));
// for split
console.log(promise.split(" "));


var num1 = "25";
var num2 = 40.5;
num1 = parseFloat(num1);
num2 = parseInt(num2);
console.log(num1 + num2);

var total = num1 + num2;
console.log(total);

var total = num1 - num2;
console.log(total);

var total = num1 * num2;
console.log(total);

var total = num1 / num2;
console.log(total);

var total = num1 % num2;
console.log(total);

num1++;
console.log(num1);

num1--;
console.log(num1);

var number = -5;
var absoluteNumber = Math.abs(number);
console.log(absoluteNumber);
number = 5.64442;
var number = Math.round(number);
console.log(number);
number = 5.44442;
var number = Math.ceil(number);
console.log(number);
number = 5.44442;
var number = Math.floor(number);
console.log(number);