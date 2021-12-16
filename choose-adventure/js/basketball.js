//White Loop count from 0 to 10
/*
let number = 0
//while (number <= 10) {
//console.log(number);
//number = number + 1;
//number++;
//}
*/


let welcomeMsg = "Welcome to Basketball realms! With 5 seconds left on the clock, you must choose a to either pass the ball or shoot a three pointer to win the game (1 or 2).";

alert(welcomeMsg);

let continueGame = "y";

while (continueGame === "y") {

    //ask which decision to make?
    let playerChoice = prompt("Which decision do you make? (1 or 2)");

    if (playerChoice === "2") {
        alert("Sorry, you airballed the shot");
        let playerAge = Number(prompt("How old are you?"));
        if (playerAge < 13) {
            alert("You are still young, you have plenty of time to grow as a player!")
        } else if (playerAge >= 14 && playerAge <= 17) {
            alert("You might have time to fix your play, you must put in the work. Court vision is very important as you had a wide open teammate ready to take a shot.")
        } else if (playerAge >= 18) {
            alert("You are too old to be playing like this, very disapointing.")
        }
    } else if (playerChoice === "1") {
        let playerTeammate = Math.floor(Math.random() * 10);
        if (playerTeammate <= 4) {
            alert("You had a surprise teammate of Steph Curry, he drills the three pointer for the win!!")
        } else if (4 < playerTeammate < 8) {
            alert("You had a surprise teammate of Russell Westbrick, he bricked the shot :(")
        } else {
            alert("You had a surprise teammate of Kendrick Perkins! He drops the pass :(")
        }


    } else {
        let playerTurnover = prompt("Sorry that was not one of your decisions. I suppose you could purposely turn the ball over, would you like to do that?");
        if (playerTurnover === "Yes") {
            alert("You turned the ball over and were benched for the rest of the season :)")
        }
        if (playerTurnover === "No") {
            alert("Good decision, I am proud of you!")
        }
    }

    continueGame = prompt("Would you like to play again (y/n)?");
}