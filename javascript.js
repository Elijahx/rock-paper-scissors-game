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
/*
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
*/
/*
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
*/
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
/*
playerSelection = prompt("Enter Rock, Paper, or Scissors.")
playerSelection = playerSelection.toLowerCase();
// include prompt validation
console.log(computerSelection);  
console.log(playerSelection);
console.log(randomNumberForPlayrSelec);
console.log(randomNumberForCompSelec);
oneRoundOfRockPaperScissors(computerSelection, playerSelection,);
*/

// 5 round game with winner declaration, you may have lost the battle but won the war
let computerSelectionWinCounter =  0;
let playerSelectionWinCounter = 0;
let playerSelection;
let computerSelection;
let randomNumberForCompSelec;
let playOrNot;

function fiveRoundGame(computerSelection,playerSelection) {
     for (let i=0; i<5; i++) {
        randomNumberForCompSelec = (Math.floor(Math.random() * (3)))
        playerSelection = prompt("Enter Rock, Paper, or Scissors.").toLowerCase();
        switch (playerSelection) {
            case "rock":
                break;
            case "paper":
                break;
            case "scissors":
                break;
            default: 
                playerSelection = prompt("Your 2nd in command caught your mistake but it won't happen again. Enter Rock, Paper, or Scissors.").toLowerCase(); 
                break;
                
        }
       

            
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
    
           
            if (computerSelection === playerSelection) {
                console.log("This game is a draw. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + ".")
                computerSelectionWinCounter = ++computerSelectionWinCounter;
                playerSelectionWinCounter = ++playerSelectionWinCounter;
            } 
            else if ((computerSelection === "rock") && (playerSelection === "scissors")) {
                console.log("You lose. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + ".")
                computerSelectionWinCounter = ++computerSelectionWinCounter;
            }
            else if ((computerSelection === "paper") && (playerSelection === "rock")) {
                console.log("You lose. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + ".")
                computerSelectionWinCounter = ++computerSelectionWinCounter; 
            }
            else if ((computerSelection === "scissors") && (playerSelection === "paper")) {
                console.log("You lose. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + ".")
                computerSelectionWinCounter = ++computerSelectionWinCounter;
            }
            else if ((computerSelection === "rock") && (playerSelection === "paper")) { 
                console.log("You win. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + ".")
                playerSelectionWinCounter = ++playerSelectionWinCounter;
            }
            else if ((computerSelection === "paper") && (playerSelection === "scissors")) { 
                console.log("You win. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + ".")
                playerSelectionWinCounter = ++playerSelectionWinCounter;
            }
            else if ((computerSelection === "scissors") && (playerSelection === "rock")) {
                console.log("You win. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + ".")
                playerSelectionWinCounter = ++playerSelectionWinCounter;
            }
        
        
        

    }
    if (computerSelectionWinCounter === playerSelectionWinCounter) {
        console.log("The war is not lost yet, its a draw for now... You have " + playerSelectionWinCounter + " Victories while the enemy has " + computerSelectionWinCounter + " Victories.")
        document.write("The war is not lost yet, its a draw for now... You have " + playerSelectionWinCounter + " Victories while the enemy has " + computerSelectionWinCounter + " Victories.")
    }
    else if (computerSelectionWinCounter > playerSelectionWinCounter) {
        console.log("You have lost the war, the enemy has " + computerSelectionWinCounter + " Victories to your " + playerSelectionWinCounter + " Victories.")
        document.write("You have lost the war, the enemy has " + computerSelectionWinCounter + " Victories to your " + playerSelectionWinCounter + " Victories.")
    }
    else if (computerSelectionWinCounter < playerSelectionWinCounter) { 
        console.log("You have won the war, you have " + playerSelectionWinCounter + " Victories to the enmemies " + computerSelectionWinCounter + " Victories.")
        document.write("You have won the war, you have " + playerSelectionWinCounter + " Victories to the enmemies " + computerSelectionWinCounter + " Victories.")
    }
}
//fiveRoundGame(computerSelection,playerSelection);
document.write("<h1>Rock-Paper-Scissors-Game</h1>");
document.write("<hr/>");
playOrNot = prompt("Do you want to engage in a five round Rock, Paper, Scissors game? Enter yes or no.").toLowerCase();

if (playOrNot === "yes") {
    fiveRoundGame(computerSelection,playerSelection);
} 
else {
    alert("Makes no difference, five round game will be initiated.")
    fiveRoundGame(computerSelection,playerSelection);
}