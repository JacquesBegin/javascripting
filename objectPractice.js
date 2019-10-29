const obj = {
  a: "a",
  b: "b",
  c: "c",
  arr: [1, 2, 3],
  func: function() {
    console.log("Called an object function.");
  }
}

obj["name"] = "Bob";



console.log(obj["name"]);