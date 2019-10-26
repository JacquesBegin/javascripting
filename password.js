// Function to obfuscator a passed string

function obfuscate(password) {
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
  }
  return password;
}

