// Creating a function that returns the index of the last 
// occurance of a value in an array. If not found return -1.

function lastIndexOf(array, numToFind) {
  let lastIndex = -1;
  array.forEach(function(element, index) {
    // element === numToFind ? lastIndex = index : 0;
    if (element === numToFind) lastIndex = index;
  });
  return lastIndex;
}

console.log(lastIndexOf([1, 2, 5, 1, 3, 5], 4));