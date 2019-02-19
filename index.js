const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(form);
    
    const user = {
        name: formData.get('name'),
        eyeSpy: false
    };

    const json = JSON.stringify(user);
    window.localStorage.setItem('user', json);

    window.location = 'quiz.html';
});
