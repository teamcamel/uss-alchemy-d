import statusBar from '../functions/status-bar.js';
import quizResult from '../quiz/results-calculate/quiz-result.js';
import makeModal from '../functions/modal.js';

const quiz = document.getElementById('quiz');

makeModal();

quiz.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(quiz);
    const answers = {
        interest: formData.get('interest'),
        quote: formData.get('quote'),
        bestQuality: formData.get('best-quality'),
        unknownPlanet: formData.get('unknown-planet'),
        shipTime: formData.get('ship-time')
    };

    const result = quizResult(answers);

    console.log('result', result);

    let json = window.localStorage.getItem('user');
    const user = JSON.parse(json);

    user.job = result;

    json = JSON.stringify(user);
    window.localStorage.setItem('user', json);

    window.location = 'star-map.html';
});

statusBar();