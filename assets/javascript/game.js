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
var currentWord = '';
var guessesRemaining = 10;
var lettersUsed = [];
var wins = 0;
var losses = 0;
var started = false;
var placeholder = [];

function generateWord() {
    started = true;
    console.log('started = true');
    currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(currentWord);
    for(var i=0; i<currentWord.length; i++) {
        placeholder.push('*');
    };
    $('#currentword').html(placeholder);
};

function keyPress() {
    var key = event.key.toLowerCase();
    var code = event.keyCode;
    if(code >= 61 && code <= 122) {
        guessesRemaining--;
        $('#remaining').html('Guesses Remaining: ' + guessesRemaining);
        if(currentWord.indexOf(key) === -1) {
            lettersUsed.push(key);
            $('#guesses').html('Letters Guessed: ' + lettersUsed);
            console.log(code);
        }
        for(i=0; i<currentWord.length; i++) {
            var tempWord = currentWord;
            index = currentWord.indexOf(key);
            if(index >= 0) {
                currentWord = tempWord.replace(key, '*'); 
                console.log('current word: ' + currentWord);
                placeholder.splice(index, 1, key);
                console.log('placeholder: ' + placeholder);
                $('#currentword').html(placeholder);
            } else if(tempWord === placeholder) {
                started = false;
                currentWord = '';
                guessesRemaining = 10;
                lettersUsed = [];
                wins++;
                placeholder = [];
                generateWord();
            }
        }  
    }
};

//  Calling Functions 

document.addEventListener('keyup', function(){
    keyPress();
});

$('#button').on('click', function(){
    if(started === false) {
        generateWord();
    }
});

// $(document).on('keyup', keyPress());

