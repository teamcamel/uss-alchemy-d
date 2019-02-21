// import makeModal from '../../functions/modal.js';

const play = document.getElementById('play');  //play button

// can this modal section all go into a function?
const modal = document.querySelector('.modal');
// const trigger = document.querySelector('.trigger');
const closeButton = document.querySelector('.close-button');

function toggleModal() {
    modal.classList.toggle('show-modal');
}

function windowOnClick(event) {
    if(event.target === modal) {
        toggleModal();
    }
}

// trigger.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);

toggleModal();
// makeModal();

const tribbles = [];
let placeTribbles;

play.addEventListener('click', function() {
    placeTribbles = setInterval(randomPlaceImg, 1000);
});

function randomPlaceImg() {
    const tribble = document.createElement('div');
    tribble.id = Math.floor(Math.random() * Math.floor(1000));
    tribble.name = 'tribble';
    tribble.innerHTML = '<img src="./assets/tribble.png" id="theimage">';
    tribbles.push(tribble);
    
    let randomx = Math.floor(Math.random() * Math.floor(500) + 1);
    let randomy = Math.floor(Math.random() * Math.floor(305) + 1);
    tribble.style.top = randomx + 'px';
    tribble.style.left = randomy + 'px';
    
    if(tribbles.length === 25) {
        clearInterval(placeTribbles);
        window.location = '../../star-map.html';
        console.log('lose');
    }

    tribble.addEventListener('click', function killTribble() {
        if(tribble.id === tribbles[tribbles.length - 1].id) {
            tribble.classList.add('hidden');
            tribbles.pop();
        }
    });

    document.body.appendChild(tribble);
}
