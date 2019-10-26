// Create a closure

let multiply = function() {
  let num = 1;
  return function() {num *= 2; return num}
}();

console.log(multiply());
console.log(multiply());
console.log(multiply());