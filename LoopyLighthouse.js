/* Create a fizzbuzz type function that takes two parameters, 
one for the starting number (inclusive) and one for the ending 
number (inclusive).*/

function loopyLighthouse(start, end) {
  let statement = "";
  for (start; start <= end; start++) {
    if (start % 3 === 0) {
      statement += "Loopy";
    }
    if (start % 4 === 0) {
      statement +="Lighthouse";
    }
    console.log(statement || start);
    statement = "";
  }
}

loopyLighthouse(100, 200);