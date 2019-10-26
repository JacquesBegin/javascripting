// Function to obfuscator a passed string

let oldPassword = process.argv[2];

function obfuscate(password) {
  if (password && (typeof password === "string")) {
    let newPass = "";
    for (let char of password) {
      switch(char) {
        case "a":
          char = "4";
          break;
        case "e":
          char = "3";
          break;
        case "o":
          char = "0";
          break;
        case "l":
          char = "1";
          break;
      }
      newPass += char;
    }
    return newPass;
  }
  return "Please enter a valid password";
}

console.log(obfuscate(oldPassword));