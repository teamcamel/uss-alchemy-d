const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(form);
    
    const user = {
        name: formData.get('name')
    };
    const json = JSON.stringify(user);
    window.localStorage.setItem('user', json);

    console.log(json);
});
