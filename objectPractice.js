const obj = {
  a: "a",
  b: "b",
  c: "c",
  arr: [1, 2, 3],
  func: function() {
    console.log("Called an object function.");
  },
  obj: {
    A: "A",
    B: "B",
    C: "C"
  },
  phone: [
    "123",
    "234",
    "345"
  ]
}

obj["name"] = "Bob";



// console.log(obj["obj"]["A"]);
console.log(obj["phone"] instanceof Object);
console.log(obj["phone"] instanceof Array);
console.log(obj["phone"] instanceof String);

console.log(Object.keys(obj));