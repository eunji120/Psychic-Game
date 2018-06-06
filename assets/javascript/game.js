//pseudo code

alert("You have 9 guesses per round. Guess a random letter.");

//Variables: Alphabet, Wins, Losses, Guesses Left, Guesses So Far, User Guess, Computer Answer
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;

var losses = 0;

var guessesLeft = 9; 

var guessesSoFar = [];

var userGuess = null;

//Generate Computer's Answer randomly

var computerAnswer = alphabet[Math.floor(Math.random() * alphabet.length)]; 

console.log("Wins: " + wins + " Losses: " + losses + " Guesses Left: " + guessesLeft + " Your Guesses so far: " + guessesSoFar + " The Answer is " + computerAnswer);

//Generate the User's guess

document.onkeyup = function(event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    if (guesesSoFar.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
        
        guessesSoFar[guessesSoFar.length]=userGuess;
        
        guessesLeft--;
    }

   //Compare User Guess vs. Computer Answer;
   //if Computer Answer and User Guess are the same --> Win
   //reset guessesLeft, guessesSoFar, computerAnswer
   if (computerAnswer == userGuess) {   

        wins++;

        alert("You won!"); 
       
        guessesLeft = 9;
       
        guessesSoFar = [];
       
        computerAnswer = alphabet[Math.floor(Math.random() * alphabet.length)];
       
        console.log("Wins: " + wins + " Losses: " + losses + " Guesses Left: " + guessesLeft + " Your Guesses so far: " + guessesSoFar + " The Answer is " + computerAnswer);
   } 

   //if User Guesses > Guesses Left --> Lose
   //reset guesses Left, guesseSoFar, computer Answer
   if (guessesLeft == 0) {
    
        losses++;

        alert("You lost!");
       
        guessesLeft = 9;
    
        guessesSoFar = [];
       
        computerAnswer = alphabet[Math.floor(Math.random() * alphabet.length)];
       
        console.log("Wins: " + wins + " Losses: " + losses + " Guesses Left: " + guessesLeft + " Your Guesses so far: " + guessesSoFar + " The Answer is " + computerAnswer);
   }
};


// for (i = 0; i < alphabet.length; i++) {
//     console.log(i);
// }

// for (i = 0; i < alphabet.length; i++) {
//     guess = prompt("What's your guess?");
//     if (answer == guess) {
//         alert("You won!");
//         break;
//     }else{
//         guess = prompt("Try again.");
//     }
// }
