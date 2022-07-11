//console.log("Javascript test.. .");
//console.log(Math.floor(Math.random() * (3)))
/*
1.Understand the problem.
2.Plan.
3.Pseudocode
-brick by brick
*/

/*
 Write a function called computerPlay that
 randomly return either rock paper or scissors
 use console to ensure its returning output
 */

/*
function computerPlay() {
    let computerSelection;
    let randomNumberForCompSelec = Math.floor(Math.random() * (3))
    switch (randomNumberForCompSelec) {
        case 0:
            computerSelection = "rock";
            //break;
        case 1:
            computerSelection = "paper"
           //break;
        case 2:
            computerSelection = "scissors"
            //break;    
         

    }
    function playerPlay() {
    let playerSelection;
    let randomNumberForPlayrSelec = Math.floor(Math.random() * (3))
    switch (randomNumberForPlayrSelec) {
        case 0:
            playerSelection = "rock";
            //break;
        case 1:
            playerSelection = "paper"
            //break;
        case 2:
            playerSelection = "scissors"
            //break;    
             
    
    }
    console.log(playerSelection); 
    }

console.log(computerSelection); 
}
*/
//computerPlay();
/*
function playerPlay() {
    let playerSelection;
    let randomNumberForPlayrSelec = Math.floor(Math.random() * (3))
    switch (randomNumberForPlayrSelec) {
        case 0:
            playerSelection = "rock";
            break;
        case 1:
            playerSelection = "paper"
            break;
        case 2:
            playerSelection = "scissors"
            break;    
         

     }
console.log(playerSelection); 
}
*/
//playerPlay();

// function takes in two springs and compares into print statement 
// statistical concepts kicked in combination
/*
rock beats scissors and loses to paper 
paper beats rock and loses to scissors
variable defined only in function or nested functions
*/
/*
More trial and error because no experience to fully design.
Variable scope in function. Variable declaration outside but initialization inside.
started thinking about higher order functions because of paper.
*/
function oneRoundOfRockPaperScissors(computerSelection,playerSelection,) {


    if (computerSelection === playerSelection) {
        console.log("This game is a draw. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + ".")
    } 
    else if ((computerSelection === "rock") && (playerSelection === "scissors")) {
        console.log("You lose. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + ".")
    }
    else if ((computerSelection === "paper") && (playerSelection === "rock")) {
        console.log("You lose. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + ".") 
    }
    else if ((computerSelection === "scissors") && (playerSelection === "paper")) {
        console.log("You lose. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + ".")
    }
    else if ((computerSelection === "rock") && (playerSelection === "paper")) { 
        console.log("You win. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + ".")
    }
    else if ((computerSelection === "paper") && (playerSelection === "scissors")) { 
        console.log("You win. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + ".")
    }
    else if ((computerSelection === "scissors") && (playerSelection === "rock")) {
        console.log("You win. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + ".")
    }

}

let computerSelection;
let randomNumberForCompSelec = (Math.floor(Math.random() * (3)))
let playerSelection;
let randomNumberForPlayrSelec = (Math.floor(Math.random() * (3)))
    
switch (randomNumberForCompSelec) {
    case 0:
        computerSelection = "rock";
        break;
    case 1:
        computerSelection = "paper"
       break;
    case 2:
        computerSelection = "scissors"
        break;     
          
}
/*
switch (randomNumberForPlayrSelec) {
    case 0:
        playerSelection = "rock";
        break;
    case 1:
        playerSelection = "paper"
        break;
    case 2:
        playerSelection = "scissors"
        break;     
          
}
*/
playerSelection = prompt("Enter Rock, Paper, or Scissors.")
playerSelection = playerSelection.toLowerCase();
// include prompt validation
console.log(computerSelection);  
console.log(playerSelection);
console.log(randomNumberForPlayrSelec);
console.log(randomNumberForCompSelec);
oneRoundOfRockPaperScissors(computerSelection, playerSelection,);

 