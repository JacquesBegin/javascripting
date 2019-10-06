/* Create an anonymous function that is stored in a variable
called "laugh" and returns the number of ha's (in a string)
that are passed as an argument. */

var laugh = function(num) {
  let totalHaS = "";
  for (let x = 0; x < num; x++) {
    totalHaS += "ha";
  }
  totalHaS += "!";
  return totalHaS;
}