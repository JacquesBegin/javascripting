// Create a command line program that takes a parameter for number
// of dice to roll and return the roll values

let diceCount = process.argv[2];

function rollDice(dice) {
  if (!dice) {
    console.log(`Enter the number of dice to roll`);
    return;
  }
  let diceRolls = [];
  for (let x = 0; x < dice; x++) {
    diceRolls.push(Math.floor(Math.random() * 6))
  }
  console.log(`Rolled ${dice} dice: ${diceRolls.join(",")}`);
}

rollDice(diceCount);