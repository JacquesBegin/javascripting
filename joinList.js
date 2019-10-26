// Function to join elements from an array into a comma separated string.

function joinList(arr) {
  let learned = "";

  if (arr.length === 0) {
    return "";
  }

  for (let ele of arr) {
    learned += ` ${ele},`
  }

  return `Today I learned${learned.slice(0, -1)}.`
}

console.log(joinList(["stuff", "more stuff", "lots of stuff"]));