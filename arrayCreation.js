// Create a function that creates an array of numbers with a 
// given start, end, and step values.

function createArray(start, end, step) {
  let newArray = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return newArray;
  }
  for (start; start <= end; start += step) {
    start % 2 === 0 ? newArray.push(start) : 0;
  }
  console.log(newArray);
}

createArray(2, 100, 4);