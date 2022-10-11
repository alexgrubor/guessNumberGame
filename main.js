//Grabbing the elements
const input = document.getElementById('input');
const btn = document.getElementById('btn');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');



let random = Math.floor(Math.random() * 100);
let noOfGuesses = 1;
let guessedNumbers = [];
let userName = prompt("Enter your name");


btn.addEventListener("click", ()=>{
    if(parseInt(input.value) === random){
        text1.innerText = "You Win " + userName + "!!";
        text2.innerText = "The Number was " + random;
        text3.innerText = "You guessed it in " + noOfGuesses + " attempts";
    }
    
    else if(input.value === ""){
        alert("Guess a number");
    }
    
    else if(input.value > 100){
        alert("Number guessed should't be greater than 100");
    }
    
    else if(input.value < 0){
        alert("Number guessed should't smaller than 0");
    }
        
    else if(input.value < random){
        guessedNumbers.push(input.value);
        text1.innerText = "Your guess is too low.";
        text2.innerText = "No. of guesses: " + noOfGuesses;
        text3.innerText = "Guessed Numbers are: " + guessedNumbers;
        noOfGuesses ++;
    }
    
    else if(input.value > random){
        guessedNumbers.push(input.value);
        text1.innerText = "Your guess is too high.";
        text2.innerText = "No. of guesses: " + noOfGuesses;
        text3.innerText = "Guessed Numbers are: " + guessedNumbers;
        noOfGuesses ++;
    }
})