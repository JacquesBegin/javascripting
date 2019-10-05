/* Create and call a function that returns how much to laugh.
The function takes one parameter (a number) for the number of 
"ha"'s to return. */

function laugh(num) {
  let theLaugh = "";
  for (let x = 0; x < num; x++) {
    theLaugh += "ha"
  }
  return theLaugh + "!";
}

console.log(laugh(10));