/*
 * Programming Quiz: Quidditch Cup (6-5)
 */

// your code goes here

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));

function hasEnoughPlayers(team1) {
  return (team1.length >= 7) ? true : false;
}
