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



for (let [key, value] of Object.entries(obj)) {
  console.log(`${key}:${value}`);
}

Object.keys(obj).forEach(function(key) {
  console.log(key, obj[key]);
});



// console.log(Object.keys(obj));