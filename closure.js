// Create a closure

let multiply = function() {
  let num = 1;
  let obj = {
    1: 1,
    2: 2,
    3: 3
  }
  return function(num) {obj[2] *= num; return obj}
}();

console.log(multiply(2));
console.log(multiply(3));
console.log(multiply(4));