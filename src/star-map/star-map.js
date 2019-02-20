import statusBar from '../functions/status-bar.js';
import { getUserJson, setUserJson } from '../../../Utilities/jsonFunction.js';

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