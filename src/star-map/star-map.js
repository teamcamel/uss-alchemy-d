import statusBar from '../functions/status-bar.js';
import { getUserJson } from '../functions/jsonFunction.js';

const imageMap = document.getElementById('image-map');
const user = getUserJson();
const avatarImage = document.getElementById('avatar');

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
if(user.tribbles === true) {
    const planetThree = document.createElement('area');
    planetThree.id = 'Earth';
    planetThree.target = '_self';
    planetThree.alt = 'Earth';
    planetThree.title = 'Earth';
    planetThree.href = 'final.html';
    planetThree.coords = '573,144,97';
    planetThree.shape = 'circle';

    imageMap.appendChild(planetThree);
}

statusBar();
let avatar = './assets/avatars/' + user.avatar;
avatarImage.src = avatar;