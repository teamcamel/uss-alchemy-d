import statusBar from '../functions/status-bar.js';

const quiz = document.getElementById('quiz');

quiz.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(quiz);

    const quizData = {
        job: formData.get('job')
    };

    let json = window.localStorage.getItem('user');
    const user = JSON.parse(json);

    user.quiz = quizData;

    json = JSON.stringify(user);
    window.localStorage.setItem('user', json);
});

statusBar();