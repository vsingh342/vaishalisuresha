console.log("made it here");

var location1 = 3;
var location2 = 4;
var location3 = 5;  

var guess;
var hits = 0;
var guesses = 0;

var issunk = false;

while(issunk == false) {

    guess = prompt("Ready, aim, fire! (enter a number from 0-6):");

    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");

    } else {
       guesses = guesses + 1;
    }
    if (guesses == 3)
    {
        issunk = true;
    }
    
}

guess = prompt

