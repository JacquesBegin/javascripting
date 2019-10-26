// Create a closure

let multiply = function() {
  let total = 1;
  let obj = {
    1: function(num) {
      return num * 1;
    },
    2: function(num) {
      return num * 2;
    },
    3: function(num) {
      return num * 3;
    }
  }
  return function() {return obj}
}();

console.log(multiply()[1](2));
console.log(multiply()[2](3));
console.log(multiply()[3](4));