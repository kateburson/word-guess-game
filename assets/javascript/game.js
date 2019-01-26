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
        'tots',
        'lalalalla'
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

    var count = -1;
    var currentWord = '';
    var guessesRemaining = 15;
    var lettersUsed = [];
    var wins = 0;
    var losses = 0;
    var started = false;
    var clicked = false;
    var placeholder = [];

    function generateWord() {
        count++;
        clicked = true;
        started = true;
        console.log('started = true');

        currentWord = '';
        $('#currentword').html(currentWord).css({'dislplay':'inline'});
        currentWord = wordBank[count];
        console.log(currentWord);

        $('#video').css({'display':'none'});

        for(var i=0; i<currentWord.length; i++) {
            placeholder.push('*');
        };
        $('#currentword').html(placeholder);

    };

    function dance(){
        $('#currentword').css({'display':'none'});
        $('#guesses').css({'display':'none'});
        $('#remaining').css({'display':'none'});
        $('#video').empty();
        $('#dance').append('<source src="assets/images/dance.mp4" type="video/mp4"/>').css({'display': 'inline'});
        $("#dance")[0].load();
    };

    function playAgain(){
        placeholder = [];
        started = false;
        wins = 0;
        losses = 0;
        count = -1;
        clicked = false;
        $('#button').text('Play Again!');
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
            for(var i=0; i<currentWord.length; i++) {
                var tempWord = currentWord;
                index = currentWord.indexOf(key);

                if(index >= 0 && guessesRemaining > 0) {
                    started = true;
                    currentWord = tempWord.replace(key, '*'); 
                    console.log('current word: ' + currentWord);
                    placeholder.splice(index, 1, key);
                    console.log('placeholder: ' + placeholder);
                    $('#currentword').html(placeholder);

                    if(placeholder.indexOf('*')=== -1 && count < wordBank.length) {
                        $('#currentword').html(wordBank[count]);
                        console.log('count',video[count]);

                        $('#video').empty();
                        $('#video').append('<source src="' + video[count] + '" type="video/mp4"/>').css({'display':'inline'});
                        $("#video")[0].load();
                        
                        console.log($('#video'));
                        started = false;
                        wins++;
                        $('#wins').html('Wins: ' + wins);
                        console.log(wins);
                        placeholder = [];
                        
                        $('#video').on('ended', function(){
                            if(started === false) {
                                generateWord();
                            }
                        });

                    } if(count === 9) {
        
                        
                        guessesRemaining = 15;
                        $('#remaining').html('Guesses Remaining: '+ guessesRemaining);
                        lettersUsed = [];
                        $('#guesses').html('Letters Used: ' + lettersUsed);

                        $('#video').on('ended', function(){
                            dance();
                            playAgain();
                        });

                    }
                }
            } 
        } 
        if (guessesRemaining === 0) {
            $('#currentword').html(wordBank[count]);
            console.log(video[count]);
            $('#video').empty();
            $('#video').append('<source src="' + video[count] + '" type="video/mp4"/>').css({'display':'inline'});
            $("#video")[0].load();
            started = false;
            losses++;
            $('#losses').html('Losses: ' + losses);
            console.log(losses);
            placeholder = [];
            
            $('#video').on('ended', function(){
                guessesRemaining = 15;
                $('#remaining').html('Guesses Remaining: '+ guessesRemaining);
                lettersUsed = [];
                $('#guesses').html('Letters Used: ' + lettersUsed);
                if(started === false) {
                    generateWord();
                } 
            });

            
        }

    };

    //  Calling Functions 

    $(document).on('keyup', function(){
        keyPress();
    });

    $('#button').on('click', function(){
        if(started === false && clicked === false) {
            $('#guesses').css({'display':'block'});
            $('#remaining').css({'display':'block'});
            $('#button').text('Word Generator');
            $('#video').css({'display':'none'});
            $('#dance').css({'display':'none'});
            generateWord();
        }
    });

});

