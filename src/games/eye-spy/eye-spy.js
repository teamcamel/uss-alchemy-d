import statusBar from '../../functions/status-bar.js';

const ship = document.getElementById('ship');
const banana = document.getElementById('banana');
const puppy = document.getElementById('puppy'); 

let rightGuess = 0;
let wrongGuess = 0;

ship.addEventListener('click', function() {
    rightGuess += 1;
    console.log('right guess', rightGuess);
    countPoints(rightGuess, wrongGuess);
});

banana.addEventListener('click', function() {
    wrongGuess += 1;
    console.log('wrong guess', wrongGuess);
});

puppy.addEventListener('click', function() {
    wrongGuess += 1;
    console.log('wrong guess', wrongGuess);
});

statusBar();


function countPoints(rightGuess, wrongGuess) {
    if(rightGuess === 3) {
        console.log('as;ldkfj');
    }
};






//make images clickable
//be able to identify what was clicked

//be able to determine if what was clicked is "true" or "correct"
    //increment correct and incorrect based on click
        //if statement to determine if it's right or wrong