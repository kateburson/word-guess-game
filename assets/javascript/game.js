window.onload = function() {
    var start = document.getElementById('start');
    var div = document.createElement('div');
    div.textContent= "Press a flippin' key to start.";
    start.appendChild(div);
};

// var chapstick = ['c' , 'h' , 'a' , 'p' , 's' , 't' , 'i' , 'c' , 'k'];
// var quesedilla = ['q', 'u', 'e', 's', 'e', 'd', 'i', 'l', 'l', 'a'];
// var pigskin = ['p', 'i', 'g', 's', 'k', 'i', 'n'];
// var liger = ['l', 'i', 'g', 'e', 'r'];
// var skills = ['s', 'k', 'i', 'l', 'l', 's'];
// var talons = ['t', 'a', 'l', 'o', 'n', 's'];
// var dreams = ['d', 'r', 'e', 'a', 'm', 's'];
// var babes = ['b', 'a', 'b', 'e', 's'];
// var college = ['c', 'o', 'l', 'l', 'e', 'g', 'e'];
// var tots = ['t' + 'o' + 't' + 's'];

var wordBank = [
    chapstick, 
    quesedilla, 
    pigskin, 
    liger, 
    skills, 
    talons, 
    dreams, 
    babes, 
    college,
    tots
];

var randomWord = "";
var lettersOfWord = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

var wins = 0;
var losses = 0;
var guessesRemaining = 9;

document.onkeydown = function() {

    if (start.style.display === "none") {
        start.style.display = "none";
    } else {
        start.style.display = "none";
    }
    
    function game() {
        randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
        lettersOfWord = randomWord.split("");
        blanks = lettersOfWord.length;
        for (var i = 0; i < blanks; i++) {
            blanksAndCorrect.push("_");
        }
    }

    // for(i = 0, i < wordBank.length, i++) {
    //     var word = document.getElementById('word');
    //     var nextWord = wordBank[i];
    //     var ul = document.createElement('ul');
    //     ul.textContent = nextWord.join('').replace(/[a-z]/g, '_');
    //     word.appendChild(ul);
    //     var userGuess = element.key;
    //         if(userGuess.onkeyup) {
    //             ul.textContent = nextWord.join('');
    //             word.appendChild(ul);
    //         };
    // };

    
    

}