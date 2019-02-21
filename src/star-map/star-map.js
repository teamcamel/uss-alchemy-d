import statusBar from '../functions/status-bar.js';
import { getUserJson, setUserJson } from '../functions/jsonFunction.js';

const imageMap = document.getElementById('image-map');
const user = getUserJson();

console.log(user.eyeSpy);
if(user.eyeSpy === true) {
    const planetTwo = document.createElement('area');
    planetTwo.id = 'tribbles';
    planetTwo.target = '_self';
    planetTwo.alt = 'game two: tribbles';
    planetTwo.title = 'Tribbles game';
    planetTwo.href = 'tribbles.html';
    planetTwo.coords = '359,420,93';
    planetTwo.shape = 'circle';

    imageMap.appendChild(planetTwo);


}

statusBar();

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