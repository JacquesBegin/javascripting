/* Create a function that takes one parameter (a string)
and reverses the order of letters in that String. */

function reverseString(string) {
  let reversedString = "";
  for (let x = string.length - 1; x >= 0; x--) {
    reversedString += string[x];
  }
  return reversedString;
}

console.log(reverseString("Hello!"));