$(document).ready(function() {
    
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

    var video = [
        'assets/images/chapstick.mp4',
        'assets/images/quesedilla.mp4',
        'assets/images/pigskin.mp4',
        'assets/images/liger.mp4',
        'assets/images/skills.mp4',
        'assets/images/talons.mp4',
        'assets/images/dreams.mp4',
        'assets/images/babes.mp4',
        'assets/images/college.mp4',
        'assets/images/tots.mp4',
    ];

    var count = 0;
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

        currentWord = '';
        $('#currentword').html(currentWord);
        currentWord = wordBank[count];
        console.log(currentWord);

        $('#video').empty();
        console.log('video div empty');
        $('#video').css({'display':'none'});

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
                if(index >= 0 && guessesRemaining > 0) {
                    currentWord = tempWord.replace(key, '*'); 
                    console.log('current word: ' + currentWord);
                    placeholder.splice(index, 1, key);
                    console.log('placeholder: ' + placeholder);
                    $('#currentword').html(placeholder);
                    if(placeholder.indexOf('*')=== -1) {
                        $('#currentword').html(wordBank[count]);
                        console.log(video[count]);
                        $('#video').append('<source src="' + video[count] + '" type="video/mp4"/>').css({'display':'inline'});
                        started = false;
                        guessesRemaining = 10;
                        $('#remaining').html('Guesses Remaining: '+ guessesRemaining);
                        lettersUsed = [];
                        $('#guesses').html('Letters Used: ' + lettersUsed);
                        wins++;
                        $('#wins').html('Wins: ' + wins);
                        console.log(wins);
                        placeholder = [];
                        count++;
                        $('#video').on('ended', function(){
                            if(started === false) {
                                generateWord();
                            }
                        });
                    }
                }
            } 
        } 
        if (guessesRemaining === 0) {
            $('#currentword').html(wordBank[count]);
            console.log(video[count]);
            $('#video').append('<source src="' + video[count] + '" type="video/mp4"/>').css({'display':'inline'});
            started = false;
            guessesRemaining = 10;
            $('#remaining').html('Guesses Remaining: '+ guessesRemaining);
            lettersUsed = [];
            $('#guesses').html('Letters Guessed: ' + lettersUsed);
            losses++;
            $('#losses').html('Losses: ' + losses);
            console.log(losses);
            placeholder = [];
            count++;
            $('#video').on('ended', function(){
                if(started === false) {
                    generateWord();
                }
            });
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

});

