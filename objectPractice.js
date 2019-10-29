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
  }
}

obj["name"] = "Bob";



console.log(obj.obj.A);