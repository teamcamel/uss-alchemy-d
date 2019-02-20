const play = document.getElementById('play');  //play button

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
    // console.log('randomx', randomx);
    let randomy = Math.floor(Math.random() * Math.floor(305) + 1);
    // console.log('randomy', randomy);
    tribble.style.top = randomx + 'px';
    tribble.style.left = randomy + 'px';
    
    if(tribbles.length === 5) {
        clearInterval(placeTribbles);
        console.log('lose');
    }

    tribble.addEventListener('click', function killTribble() {
        if(tribble.id === tribbles[tribbles.length - 1].id) {
            tribble.classList.add('hidden');
            tribbles.pop();
        }
        window.location = './star-map.html';
    });

    document.body.appendChild(tribble);
    
}
