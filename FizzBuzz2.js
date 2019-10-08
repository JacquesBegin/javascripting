function loopyLighthouse(range, multiples, words) {
  let statement = "";
  for (range[0]; range[0] <= range[1]; range[0]++) {
    if (range[0] % multiples[0] === 0) {
      statement += words[0];
    }
    if (range[0] % multiples[1] === 0) {
      statement +=words[1];
    }
    console.log(statement || range[0]);
    statement = "";
  }
}



loopyLighthouse([15, 90], [2, 5], ["Bob", "Smith"]);