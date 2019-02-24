import statusBar from '../functions/status-bar.js';
import { getUserJson } from '../functions/jsonFunction.js';

const imageMap = document.getElementById('image-map');
const user = getUserJson();
const avatarImage = document.getElementById('avatar');
const narrative = document.getElementById('narrative');

// conditional and branching logic with lots of code duplication 
// is a great opportunity to
// wrap in a function and TDD
// Something like narrative.textContent = checkQuestCompletion(user.eyeSpy, user.tribbles);
if(user.eyeSpy === false) {
    narrative.textContent = 'You have been in deep space for 9 months on your first mission on the Starship USS Alchemy-D. It is time to navigate your way home. Click on the purple planet to begin your journey.';
}

if(user.eyeSpy === true && user.tribbles === false) {
    narrative.textContent = 'You successfully escaped the alternate universe overlap and everything is back to normal. Click on the ringed planet to continue your journey home.';
}

if(user.tribbles === true) {
    narrative.textContent = 'The tribbles have been eradicated from the USS Alchemy-D and it is time to go home! Click on planet Earth to return to Starfleet Headquarters.';
}

if(user.eyeSpy === true) {
    const planetTwo = document.createElement('area');
    // there is a lot of data here; I recommend putting it into an
    // object, storing it in its own .js file, and referencing that.
    // Avoid mixing logic and data storage.
    
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