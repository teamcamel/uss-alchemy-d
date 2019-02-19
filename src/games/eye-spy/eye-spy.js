import statusBar from '../../functions/status-bar.js';
import { getUserJson, setUserJson } from '../../../Utilities/jsonFunction.js';

const ship = document.getElementById('ship');
const banana = document.getElementById('banana');
const puppy = document.getElementById('puppy'); 

const images = [
    {   
        id: 'batleth',
        src: './assets/batleth.jpg',
        value: true
    },
]




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
    countPoints(rightGuess, wrongGuess);
});

puppy.addEventListener('click', function() {
    wrongGuess += 1;
    countPoints(rightGuess, wrongGuess);
    console.log('wrong guess', wrongGuess);
});

statusBar();


function countPoints(rightGuess, wrongGuess) {
    if(rightGuess === 1) {
        window.location = './src/games/eye-spy/win-eye-spy.html';
        console.log('rightGuess reached 1');
        let user = getUserJson();
        user.eyeSpy = true;
        setUserJson(user);
        console.log(user);
    }
    if(wrongGuess === 2) {
        window.location = './src/games/eye-spy/lose-eye-spy.html';
        console.log('wrongGuess reached 2');
    }
}






//make images clickable
//be able to identify what was clicked

//be able to determine if what was clicked is "true" or "correct"
    //increment correct and incorrect based on click
        //if statement to determine if it's right or wrong