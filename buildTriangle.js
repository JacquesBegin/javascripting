function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

function buildTriangle(maxWidth) {
  let triangle = "";
  for (let x = 1; x <= maxWidth; x++) {
    triangle += makeLine(x);
  }
  return triangle;
}

console.log(buildTriangle(12));