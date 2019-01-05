
var wordBank = [
    'chapstick', 
    'quesedilla', 
    'pigskin', 
    'liger', 
    'skills', 
    'talons', 
    'dreams', 
    'babes', 
    'college',
    'tots'
];

var randomWord = "";
var lettersOfWord = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];
var guess = [];

var wins = 0;
var losses = 0;
var guessesRemaining = 9;

function start() {
    var start = document.getElementById('start');
    var div = document.createElement('div');
    div.textContent = "Press any key to start.";
    start.appendChild(div);
    if(window.onkeyup) {
        start.removeChild(div);
    }
};

function game() {
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    lettersOfWord = randomWord.split("");
    blanks = lettersOfWord.length;
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    };
    
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");
};

function letterCheck(event) { 
    var guess = event.key.toLowerCase();
    if(guess === lettersOfWord) {
        console.log(guess); 
        guess.push(guess);
        document.getElementById("currentword").replaceWith(lettersOfWord);
    }
    else {
        guess.push(wrongGuess);
    }
};

window.onload = start();

window.onkeyup = game();

window.onkeyup = letterCheck();