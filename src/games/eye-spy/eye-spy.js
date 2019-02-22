import statusBar from '../../functions/status-bar.js';
import { getUserJson, setUserJson } from '../../functions/jsonFunction.js';

const imageField = document.getElementById('image-field');
const avatarImage = document.getElementById('avatar');
let user = getUserJson();
const counterRight = document.getElementById('counter-right');
const counterWrong = document.getElementById('counter-wrong');
const audioCorrect = document.getElementById('audio-correct');
const audioWrong = document.getElementById('audio-wrong');

const images = [
    {   
        id: 'batleth',
        src: './assets/batleth.jpg',
        value: true
    },
    {
        id: 'communicator',
        src: './assets/communicator.jpg',
        value: true
    },
    {
        id: 'drwho',
        src: './assets/dr-who-room.jpg',
        value: false
    },
    {
        id: 'flux',
        src: './assets/fluxcapacitor.jpg',
        value: false
    },
    {
        id: 'hansologun',
        src: './assets/hansologun.jpg',
        value: false
    },
    {
        id: 'injector',
        src: './assets/injector.jpg',
        value: true
    },
    {
        id: 'mystery-gear',
        src: './assets/mystery-gear.jpg',
        value: false
    },
    {
        id: 'nextgenphaser',
        src: './assets/nextgenphaser.jpg',
        value: true
    },
    {
        id: 'pistol-firefly',
        src: './assets/pistol-firefly.png',
        value: false
    },
    {
        id: 'sonic-screwdriver',
        src: './assets/sonic-screwdriver.jpg',
        value: false
    },
    {
        id: 'spacesuit',
        src: './assets/spacesuit.png',
        value: false
    },
    {
        id: 'stargate',
        src: './assets/stargate.jpg',
        value: false
    }
];

let wrongGuess = 0;
let rightGuess = 0;

statusBar();
let avatar = './assets/avatars/' + user.avatar;
avatarImage.src = avatar;

for(let i = 0; i < images.length; i++) {
    const imageObject = images[i];
    const img = document.createElement('img');
    img.src = imageObject.src;
    img.classList.add(imageObject.value);
    img.classList.add('tile');
    img.value = imageObject.value;
    img.id = imageObject.id;
    imageField.appendChild(img);

    console.log(img);

    img.addEventListener('click', function() {
        if(img.classList.value === 'true tile') {
            rightGuess += 1;
            audioCorrect.play();
            countPoints(rightGuess, wrongGuess);
            img.classList.add('hidden');
        } else {
            wrongGuess += 1;
            audioWrong.volume = 1.0;
            audioWrong.play();
            countPoints(rightGuess, wrongGuess);
            img.classList.add('hidden');
        }
        counterRight.textContent = 'Right Guesses: ' + rightGuess;
        counterWrong.textContent = 'Wrong Guesses: ' + wrongGuess;
    });
}



function countPoints(rightGuess, wrongGuess) {
    if(rightGuess === 4) {
        window.location = './win-eye-spy.html';
        console.log('rightGuess reached 4');
        user.eyeSpy = true;
        setUserJson(user);
    }

    if(wrongGuess === 3) {
        window.location = './lose-eye-spy.html';
    }
}