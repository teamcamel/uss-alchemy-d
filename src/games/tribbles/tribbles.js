// import makeModal from '../../functions/modal.js';

import statusBar from '../../functions/status-bar.js';
import { getUserJson } from '../../functions/jsonFunction.js';

const play = document.getElementById('play');  //play button
const audioTribble = document.getElementById('audio-tribble');
const bgDiv = document.getElementById('background-div');
const countdown = document.getElementById('countdown');

const user = getUserJson();
const avatarImage = document.getElementById('avatar');
// const modal = document.querySelector('.modal');
// const closeButton = document.querySelector('.close-button');

// function toggleModal() {
//     modal.classList.toggle('show-modal');
// }

// function windowOnClick(event) {
//     if(event.target === modal) {
//         toggleModal();
//     }
// }

// closeButton.addEventListener('click', toggleModal);
// window.addEventListener('click', windowOnClick);

// toggleModal();

statusBar();

let avatar = './assets/avatars/' + user.avatar;

avatarImage.src = avatar;

const tribbles = [];
let placeTribbles;
// let runCounter;
let counter = 45;

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
    
    console.log('counter', counter);
    if(tribbles.length === 25) {
        clearInterval(placeTribbles);
        window.location = '/tribbles-lose.html';
        console.log('lose');
    }
    if(counter === 0) {
        clearInterval(placeTribbles);
        window.location = './tribbles-win.html';
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
