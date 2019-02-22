import statusBar from '../../functions/status-bar.js';
import { getUserJson, setUserJson } from '../../functions/jsonFunction.js';

const play = document.getElementById('play'); 
const audioTribble = document.getElementById('audio-tribble');
const bgDiv = document.getElementById('background-div');
const countdown = document.getElementById('countdown');

let user = getUserJson();
const avatarImage = document.getElementById('avatar');

statusBar();

let avatar = './assets/avatars/' + user.avatar;

avatarImage.src = avatar;

const tribbles = [];
let placeTribbles;
let counter = 30;

play.addEventListener('click', function() {
    placeTribbles = setInterval(randomPlaceImg, 1000);
});

function randomPlaceImg() {
    const tribble = document.createElement('div');
    tribble.id = Math.floor(Math.random() * Math.floor(1000));
    tribble.name = 'tribble';
    tribble.innerHTML = '<img src="./assets/tribblecartoon.png" id="theimage">';
    tribbles.push(tribble);
    
    let randomx = Math.floor(Math.random() * Math.floor(525) + 1);
    let randomy = Math.floor(Math.random() * Math.floor(400) + 1);
    tribble.style.top = randomy + 'px';
    tribble.style.left = randomx + 'px';
    
    counter -= 1;
    countdown.textContent = 'time left: ' + counter;
    
    if(tribbles.length === 20) {
        clearInterval(placeTribbles);
        window.location = '/tribbles-lose.html';
    }
    if(counter === 0) {
        clearInterval(placeTribbles);
        window.location = '/tribbles-win.html';
        user.tribbles = true;
        setUserJson(user);
    }

    tribble.addEventListener('click', function killTribble() {
        if(tribble.id === tribbles[tribbles.length - 1].id) {
            tribble.classList.add('hidden');
            tribbles.pop();
        }
    });
    
    audioTribble.play();
    bgDiv.appendChild(tribble);
}
