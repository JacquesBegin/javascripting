/* Create functions to determine if a number is odd or not.
Create a function definition, function expression, named 
function expression, inline/callback function expression */

// function definition
function oddFuncDef(num) {
  return !(num % 2 === 0);
}

// function expression
var oddFuncExp = function(num) {
  return !(num % 2 === 0);
}

// named function expression
var oddNamedFuncExp = function namedFuncExp(num) {
  return !(num % 2 === 0);
}

function isEven(num) {
  return num % 2 === 0;
}

function checkOddEven(callback, num) {
  return callback(num);
}

function checkInline(callback, num) {
  console.log("Here's my answer...");
  callback(num);
}

checkInline(function(num) {
  console.log(!(num % 2 === 0));
}, 42);


// console.log(checkOddEven(oddFuncDef, 4));
// console.log(checkOddEven(isEven, 3));