
alert("You have 9 guesses per round. Guess a random letter.");


//Generate Computer's Answer randomly

var computerAnswer = alphabet[Math.floor(Math.random() * alphabet.length)]; 

console.log("Wins: " + wins + " Losses: " + losses + " Guesses Left: " + guessesLeft + " Your Guesses so far: " + guessesSoFar + " The Answer is " + computerAnswer);

//Generate the User's guess

document.onkeyup = function(event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    for (i = 0; i < alphabet.length; i++) {

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

        display();
       
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

        display();
       
        computerAnswer = alphabet[Math.floor(Math.random() * alphabet.length)];
       
        console.log("Wins: " + wins + " Losses: " + losses + " Guesses Left: " + guessesLeft + " Your Guesses so far: " + guessesSoFar + " The Answer is " + computerAnswer);
   }

    }
};


// for (i = 0; i < alphabet.length; i++) {
//     console.log(i);
// }

// for (i = 0; i < alphabet.length; i++) {
//     
//     if (computerAnswer == userGuess) {
//         alert("You won!");
//         break;
//     }else{
//         guess = prompt("Try again.");
//     }
// }

