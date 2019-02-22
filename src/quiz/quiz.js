import quizResult from '../quiz/results-calculate/quiz-result.js';

const quiz = document.getElementById('quiz');

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

    let json = window.localStorage.getItem('user');
    const user = JSON.parse(json);

    user.job = result;

    let avatar = null;

    if(result === 'Captain') {
        avatar = 'captain.png';
    }
    if(result === 'Engineer') {
        avatar = 'engineer.png';
    }
    if(result === 'Doctor') {
        avatar = 'doctor.png';
    }
    if(result === 'Red Shirt') {
        avatar = 'redshirt.png';
    }

    user.avatar = avatar;

    json = JSON.stringify(user);
    window.localStorage.setItem('user', json);

    window.location = 'quiz-results.html';
});
