import statusBar from '../functions/status-bar.js';
import { getUserJson, setUserJson } from '../../../Utilities/jsonFunction.js';

const imageMap = document.getElementById('image-map');
const user = getUserJson();
console.log('userJson', getUserJson());

const trueFalse = true;

if(trueFalse === true) {
    const planetTwo = document.createElement('area');
    planetTwo.id = 'tribbles';
    planetTwo.target = '_self';
    planetTwo.alt = 'game two: tribbles';
    planetTwo.title = 'Tribbles game';
    planetTwo.href = 'tribbles.html';
    planetTwo.coords = '359,420,93';
    planetTwo.shape = 'circle';

    console.log('image map', imageMap);
    console.log('planet Two', planetTwo);
    imageMap.appendChild(planetTwo);


}

statusBar();