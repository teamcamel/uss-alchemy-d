function statusBar() {
    const userStatus = document.getElementById('user-status');

    let json = window.localStorage.getItem('user');
    const user = JSON.parse(json);

    const userName = document.createElement('p');
    const userJob = document.createElement('p');

    userName.textContent = 'Name: ' + user.name;
    userStatus.appendChild(userName);

    userJob.textContent = 'Job: ' + user.quiz.job; //change to result from quiz..not sure how
    userStatus.appendChild(userJob);
}

export default statusBar;