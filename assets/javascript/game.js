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

// function keyPress() {
//     var key = event.key.toLowerCase();
//     var code = event.keyCode;
//     // console.log(event.keyCode);
//     if(code >= 61 && code <= 122) {
//         if(lettersUsed.indexOf(key) === -1){
//             lettersUsed.push(key);
//             $('#guesses').html('Letters Guessed: ' + lettersUsed);
//             guessesRemaining--;
//             $('#remaining').html('Guesses Remaining: ' + guessesRemaining);
//             for(i=0; i<currentWord.length; i++){
//                 var tempWord = currentWord;
//                 var index = tempWord.indexOf(key);
//                 if(index >= 0) {
//                     tempWord.replace(key, '*');
//                     placeholder.replace('*', key);
//                 }
//             }
//         }
//     }
// };

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
    guessesRemaining--;
    console.log(code);
    if(currentWord.indexOf(key) === -1) {
        lettersUsed.push(key);
        $('#guesses').html('Letters Guessed: ' + lettersUsed);
        $('#remaining').html('Guesses Remaining: ' + guessesRemaining);
    } 
    var index = currentWord.indexOf(key);
    if(index >= 0){
        for(i=0; i<currentWord.length; i++) {
            placeholder.splice(index, 1, key);
            console.log('placeholder: ' + placeholder);
            $('#currentword').html(placeholder);
            if(currentWord === placeholder.toString()) {
                currentWord = '';
                guessesRemaining = 10;
                lettersUsed = [];
                wins++;
                placeholder = '';
                generateWord();
            }
        }   
    }
};

function video() {

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








