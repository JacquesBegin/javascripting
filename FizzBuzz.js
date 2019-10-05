/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;
let printStatement = "";
while (x <= 20) {
    // check divisibility
    // print Julia, James, or JuliaJames
    // increment x
    if (x % 3 === 0) {
      printStatement = "Julia";
    }
    if (x % 5 === 0) {
      printStatement += "James";
    }
    console.log(printStatement || x);
    printStatement = "";
    x += 1;
}
