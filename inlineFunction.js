/* Create an inline function expression that is passed as the 
parameter to a given function. This is also known as a 
callback function. */

function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function laugh(num) {
  var laughing = "";
  for (let x = 0; x < num; x++) {
    laughing += "ha"
  }
  return `${laughing}!`;
})
