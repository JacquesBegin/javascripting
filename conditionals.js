const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

const isCitizen = true;
const age = 26;

if (isCitizen && age >= 18) {
  console.log("You are eligible to vote.");
}

const temperature = 41;

if (temperature < -40 || temperature > 40) {
  console.log("Don't go outside!");
}