
window.onload = function() {
    var start = document.getElementById('start');
    var div = document.createElement('div');
    div.textContent= "Press a flippin' key to start.";
    start.appendChild(div);
};


document.onkeyup = function() {

var chapstick = ['c' + 'h' + 'a' + 'p' + 's' + 't' + 'i' + 'c' + 'k'];
var quesedilla = ['q', 'u', 'e', 's', 'e', 'd', 'i', 'l', 'l', 'a'];
var pigskin = ['p', 'i', 'g', 's', 'k', 'i', 'n'];
var liger = ['l', 'i', 'g', 'e', 'r'];
var skills = ['s', 'k', 'i', 'l', 'l', 's'];
var talons = ['t', 'a', 'l', 'o', 'n', 's'];
var dreams = ['d', 'r', 'e', 'a', 'm', 's'];
var babes = ['b', 'a', 'b', 'e', 's'];
var college = ['c', 'o', 'l', 'l', 'e', 'g', 'e'];
var tots = ['t' + 'o' + 't' + 's'];

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




    for(var i = 0; i < wordBank.length; i++) {
        var word = document.getElementById('word');
        var nextWord = wordBank[i];
        var div = document.createElement('div');
        div.textContent= nextWord;
        word.appendChild(div);
    }

    

    // for(var i=0; i < chapstick.length; i++) {
    //     var letter = document.getElementById('letter');
    //     var nextLetter = chapstick[i];
    //     var li = document.createElement('li');
    //     li.textContent(letter);
    //     letter.appendChild(li);
    // }




        // if(userGuess = letter) {
        //     element.display(letter)
        // }




};
