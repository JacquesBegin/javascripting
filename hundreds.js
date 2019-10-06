/* Create a function to determine how many hundreds there are 
in a number. */

function hundreds(num) {
  let remainder = num % 100;
  return (num - remainder) / 100;
}

console.log(hundreds(0));