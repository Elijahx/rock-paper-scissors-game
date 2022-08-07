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
/*
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
                document.write("This game is a draw. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + ".")
                document.write("<br>");
                computerSelectionWinCounter = ++computerSelectionWinCounter;
                playerSelectionWinCounter = ++playerSelectionWinCounter;
            } 
            else if ((computerSelection === "rock") && (playerSelection === "scissors")) {
                console.log("You lose. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + ".")
                document.write("You lose. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + ".")
                document.write("<br>");
                computerSelectionWinCounter = ++computerSelectionWinCounter;
            }
            else if ((computerSelection === "paper") && (playerSelection === "rock")) {
                console.log("You lose. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + ".")
                document.write("You lose. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + ".")
                document.write("<br>");
                computerSelectionWinCounter = ++computerSelectionWinCounter; 
            }
            else if ((computerSelection === "scissors") && (playerSelection === "paper")) {
                console.log("You lose. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + ".")
                document.write("You lose. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + ".")
                document.write("<br>");
                computerSelectionWinCounter = ++computerSelectionWinCounter;
            }
            else if ((computerSelection === "rock") && (playerSelection === "paper")) { 
                console.log("You win. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + ".")
                document.write("You win. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + ".")
                document.write("<br>");
                playerSelectionWinCounter = ++playerSelectionWinCounter;
            }
            else if ((computerSelection === "paper") && (playerSelection === "scissors")) { 
                console.log("You win. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + ".")
                document.write("You win. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + ".")
                document.write("<br>");
                playerSelectionWinCounter = ++playerSelectionWinCounter;
            }
            else if ((computerSelection === "scissors") && (playerSelection === "rock")) {
                console.log("You win. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + ".")
                document.write("You win. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + ".")
                document.write("<br>");
                playerSelectionWinCounter = ++playerSelectionWinCounter;
            }
        
        
        

    }
    if (computerSelectionWinCounter === playerSelectionWinCounter) {
        console.log("The war is not lost yet, its a draw for now... You have " + playerSelectionWinCounter + " Victories while the enemy has " + computerSelectionWinCounter + " Victories.")
        document.write("The war is not lost yet, its a draw for now... You have " + playerSelectionWinCounter + " Victories while the enemy has " + computerSelectionWinCounter + " Victories.")
        document.write("<br>");
    }
    else if (computerSelectionWinCounter > playerSelectionWinCounter) {
        console.log("You have lost the war, the enemy has " + computerSelectionWinCounter + " Victories to your " + playerSelectionWinCounter + " Victories.")
        document.write("You have lost the war, the enemy has " + computerSelectionWinCounter + " Victories to your " + playerSelectionWinCounter + " Victories.")
        document.write("<br>");
    }
    else if (computerSelectionWinCounter < playerSelectionWinCounter) { 
        console.log("You have won the war, you have " + playerSelectionWinCounter + " Victories to the enemies " + computerSelectionWinCounter + " Victories.")
        document.write("You have won the war, you have " + playerSelectionWinCounter + " Victories to the enemies " + computerSelectionWinCounter + " Victories.")
        document.write("<br>");
    }
}
*/
//fiveRoundGame(computerSelection,playerSelection);
//document.write("<h1>Rock-Paper-Scissors-Game</h1>");
//document.write("<hr/>");
//playOrNot = prompt("Do you want to engage in a five round Rock, Paper, Scissors game? Enter yes or no.").toLowerCase();

/*if (playOrNot === "yes") {
    fiveRoundGame(computerSelection,playerSelection);
} 
else {
    alert("Makes no difference, five round game will be initiated.")
    fiveRoundGame(computerSelection,playerSelection);
}
*/
//let rockButton = document.getElementById("rockButton");
//rockButton.addEventListener("click",oneRoundOfRPSPSR(computerSelection, playerSelection));

let computerSelectionWinCounter =  0;
let playerSelectionWinCounter = 0;
let rockButton_element = document.getElementById("rockButton");
rockButton_element.addEventListener("click", oneRoundOfRPSPSR);
let paperButton_element = document.getElementById("paperButton");
paperButton_element.addEventListener("click", oneRoundOfRPSPSP);
let scissorsButton_element = document.getElementById("scissorsButton");
scissorsButton_element.addEventListener("click", oneRoundOfRPSPSS);

 // Disable buttons to prevent any more games past five.
function buttonDisabler() {
    document.getElementById("rockButton").disabled = true;
    document.getElementById("paperButton").disabled = true;
    document.getElementById("scissorsButton").disabled = true;
}

function oneRoundOfRPSPSR(computerSelection,playerSelection) {
    
    playerSelection = "rock";
    randomNumberForCompSelec = (Math.floor(Math.random() * (3)))
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
        computerSelectionWinCounter = ++computerSelectionWinCounter;
        playerSelectionWinCounter = ++playerSelectionWinCounter;
        document.getElementById("victoryAndDefeatCount").innerHTML = "This game is a draw. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + "." + "\n" + "Skirmish Results: " + "Computer Battles Won - " + computerSelectionWinCounter + " Player Battles Won - " + playerSelectionWinCounter;
} 
    else if ((computerSelection === "rock") && (playerSelection === "scissors")) {
        computerSelectionWinCounter = ++computerSelectionWinCounter;
        document.getElementById("victoryAndDefeatCount").innerHTML = "You lose. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + "." + "\n" + "Skirmish Results: " + "Computer Battles Won - " + computerSelectionWinCounter + " Player Battles Won - " + playerSelectionWinCounter;
}
    else if ((computerSelection === "paper") && (playerSelection === "rock")) {
        computerSelectionWinCounter = ++computerSelectionWinCounter; 
        document.getElementById("victoryAndDefeatCount").innerHTML = "You lose. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + "." + "\n" + "Skirmish Results: " + "Computer Battles Won - " + computerSelectionWinCounter + " Player Battles Won - " + playerSelectionWinCounter;
}
    else if ((computerSelection === "scissors") && (playerSelection === "paper")) {
        computerSelectionWinCounter = ++computerSelectionWinCounter;
        document.getElementById("victoryAndDefeatCount").innerHTML = "You lose. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + "." + "\n" + "Skirmish Results: " + "Computer Battles Won - " + computerSelectionWinCounter + " Player Battles Won - " + playerSelectionWinCounter;
        
}
    else if ((computerSelection === "rock") && (playerSelection === "paper")) { 
        playerSelectionWinCounter = ++playerSelectionWinCounter;
        document.getElementById("victoryAndDefeatCount").innerHTML = "You Win. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + "." + "\n" + "Skirmish Results: " + "Computer Battles Won - " + computerSelectionWinCounter + " Player Battles Won - " + playerSelectionWinCounter;
}
    else if ((computerSelection === "paper") && (playerSelection === "scissors")) { 
        playerSelectionWinCounter = ++playerSelectionWinCounter;
        document.getElementById("victoryAndDefeatCount").innerHTML = "You Win. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + "." + "\n" + "Skirmish Results: " + "Computer Battles Won - " + computerSelectionWinCounter + " Player Battles Won - " + playerSelectionWinCounter;
}
    else if ((computerSelection === "scissors") && (playerSelection === "rock")) {
        playerSelectionWinCounter = ++playerSelectionWinCounter;
        document.getElementById("victoryAndDefeatCount").innerHTML = "You Win. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + "." + "\n" + "Skirmish Results: " + "Computer Battles Won - " + computerSelectionWinCounter + " Player Battles Won - " + playerSelectionWinCounter;
}
if ((computerSelectionWinCounter === 5) || (playerSelectionWinCounter === 5)) {

    buttonDisabler();

    if (computerSelectionWinCounter > playerSelectionWinCounter) {
        document.getElementById("warResults").innerHTML = "You have lost the War to five.";
    }
    else if (computerSelectionWinCounter < playerSelectionWinCounter) {
        document.getElementById("warResults").innerHTML = "You have won the War to five.";
    }
    else if (computerSelectionWinCounter === playerSelectionWinCounter) {
        document.getElementById("warResults").innerHTML = "The War to five is a draw, for now.";
    }
}
}

function oneRoundOfRPSPSP(computerSelection,playerSelection) {
    playerSelection = "paper";
    randomNumberForCompSelec = (Math.floor(Math.random() * (3)))
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
        computerSelectionWinCounter = ++computerSelectionWinCounter;
        playerSelectionWinCounter = ++playerSelectionWinCounter;
        document.getElementById("victoryAndDefeatCount").innerHTML = "This game is a draw. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + "." + "\n" + "Skirmish Results: " + "Computer Battles Won - " + computerSelectionWinCounter + " Player Battles Won - " + playerSelectionWinCounter;
} 
    else if ((computerSelection === "rock") && (playerSelection === "scissors")) {
        computerSelectionWinCounter = ++computerSelectionWinCounter;
        document.getElementById("victoryAndDefeatCount").innerHTML = "You lose. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + "." + "\n" + "Skirmish Results: " + "Computer Battles Won - " + computerSelectionWinCounter + " Player Battles Won - " + playerSelectionWinCounter;
}
    else if ((computerSelection === "paper") && (playerSelection === "rock")) {
        computerSelectionWinCounter = ++computerSelectionWinCounter; 
        document.getElementById("victoryAndDefeatCount").innerHTML = "You lose. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + "." + "\n" + "Skirmish Results: " + "Computer Battles Won - " + computerSelectionWinCounter + " Player Battles Won - " + playerSelectionWinCounter;
}
    else if ((computerSelection === "scissors") && (playerSelection === "paper")) {
        computerSelectionWinCounter = ++computerSelectionWinCounter;
        document.getElementById("victoryAndDefeatCount").innerHTML = "You lose. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + "." + "\n" + "Skirmish Results: " + "Computer Battles Won - " + computerSelectionWinCounter + " Player Battles Won - " + playerSelectionWinCounter;
    
}
    else if ((computerSelection === "rock") && (playerSelection === "paper")) { 
        playerSelectionWinCounter = ++playerSelectionWinCounter;
        document.getElementById("victoryAndDefeatCount").innerHTML = "You Win. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + "." + "\n" + "Skirmish Results: " + "Computer Battles Won - " + computerSelectionWinCounter + " Player Battles Won - " + playerSelectionWinCounter;
}
    else if ((computerSelection === "paper") && (playerSelection === "scissors")) { 
        playerSelectionWinCounter = ++playerSelectionWinCounter;
        document.getElementById("victoryAndDefeatCount").innerHTML = "You Win. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + "." + "\n" + "Skirmish Results: " + "Computer Battles Won - " + computerSelectionWinCounter + " Player Battles Won - " + playerSelectionWinCounter;
}
    else if ((computerSelection === "scissors") && (playerSelection === "rock")) {
        playerSelectionWinCounter = ++playerSelectionWinCounter;
        document.getElementById("victoryAndDefeatCount").innerHTML = "You Win. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + "." + "\n" + "Skirmish Results: " + "Computer Battles Won - " + computerSelectionWinCounter + " Player Battles Won - " + playerSelectionWinCounter;
}
if ((computerSelectionWinCounter === 5) || (playerSelectionWinCounter === 5)) {

    buttonDisabler();

    if (computerSelectionWinCounter > playerSelectionWinCounter) {
        document.getElementById("warResults").innerHTML = "You have lost the War to five.";
    }
    else if (computerSelectionWinCounter < playerSelectionWinCounter) {
        document.getElementById("warResults").innerHTML = "You have won the War to five.";
    }
    else if (computerSelectionWinCounter === playerSelectionWinCounter) {
        document.getElementById("warResults").innerHTML = "The War to five is a draw, for now.";
    }
}
}

function oneRoundOfRPSPSS(computerSelection,playerSelection) {
    playerSelection = "scissors";
    randomNumberForCompSelec = (Math.floor(Math.random() * (3)))
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
        computerSelectionWinCounter = ++computerSelectionWinCounter;
        playerSelectionWinCounter = ++playerSelectionWinCounter;
        document.getElementById("victoryAndDefeatCount").innerHTML = "This game is a draw. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + "." + "\n" + "Skirmish Results: " + "Computer Battles Won - " + computerSelectionWinCounter + " Player Battles Won - " + playerSelectionWinCounter;
} 
    else if ((computerSelection === "rock") && (playerSelection === "scissors")) {
        computerSelectionWinCounter = ++computerSelectionWinCounter;
        document.getElementById("victoryAndDefeatCount").innerHTML = "You lose. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + "." + "\n" + "Skirmish Results: " + "Computer Battles Won - " + computerSelectionWinCounter + " Player Battles Won - " + playerSelectionWinCounter;
}
    else if ((computerSelection === "paper") && (playerSelection === "rock")) {
        computerSelectionWinCounter = ++computerSelectionWinCounter; 
        document.getElementById("victoryAndDefeatCount").innerHTML = "You lose. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + "." + "\n" + "Skirmish Results: " + "Computer Battles Won - " + computerSelectionWinCounter + " Player Battles Won - " + playerSelectionWinCounter;
}
    else if ((computerSelection === "scissors") && (playerSelection === "paper")) {
        computerSelectionWinCounter = ++computerSelectionWinCounter;
        document.getElementById("victoryAndDefeatCount").innerHTML = "You lose. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + "." + "\n" + "Skirmish Results: " + "Computer Battles Won - " + computerSelectionWinCounter + " Player Battles Won - " + playerSelectionWinCounter;
    
}
    else if ((computerSelection === "rock") && (playerSelection === "paper")) { 
        playerSelectionWinCounter = ++playerSelectionWinCounter;
        document.getElementById("victoryAndDefeatCount").innerHTML = "You Win. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + "." + "\n" + "Skirmish Results: " + "Computer Battles Won - " + computerSelectionWinCounter + " Player Battles Won - " + playerSelectionWinCounter;
}
    else if ((computerSelection === "paper") && (playerSelection === "scissors")) { 
        playerSelectionWinCounter = ++playerSelectionWinCounter;
        document.getElementById("victoryAndDefeatCount").innerHTML = "You Win. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + "." + "\n" + "Skirmish Results: " + "Computer Battles Won - " + computerSelectionWinCounter + " Player Battles Won - " + playerSelectionWinCounter;
}
    else if ((computerSelection === "scissors") && (playerSelection === "rock")) {
        playerSelectionWinCounter = ++playerSelectionWinCounter;
        document.getElementById("victoryAndDefeatCount").innerHTML = "You Win. " + "Computer selection was " + (computerSelection) + " while your selection was " + (playerSelection) + "." + "\n" + "Skirmish Results: " + "Computer Battles Won - " + computerSelectionWinCounter + " Player Battles Won - " + playerSelectionWinCounter;
}
if ((computerSelectionWinCounter === 5) || (playerSelectionWinCounter === 5)) {

    buttonDisabler();

    if (computerSelectionWinCounter > playerSelectionWinCounter) {
        document.getElementById("warResults").innerHTML = "You have lost the War to five.";
    }
    else if (computerSelectionWinCounter < playerSelectionWinCounter) {
        document.getElementById("warResults").innerHTML = "You have won the War to five.";
    }
    else if (computerSelectionWinCounter === playerSelectionWinCounter) {
        document.getElementById("warResults").innerHTML = "The War to five is a draw, for now.";
    }
}  
}