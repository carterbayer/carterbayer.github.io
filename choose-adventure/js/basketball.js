let welcomeMsg = "Welcome to Basketball realms! With 5 seconds left on the clock, you must choose a to either pass the ball or shoot a three pointer to win the game (1 or 2).";

alert(welcomeMsg);

//ask which decision to make?
let playerChoice = prompt("Which decision do you make? (1 or 2)");

if (playerChoice === "2") {
    alert("Sorry, you airballed the shot")
} else if (playerChoice === 1) {
    alert("You had a surprise teammate of Steph Curry, he drills the three pointer for the win!!")
} else {
    alert("Sorry that was not one of your decisions")
}