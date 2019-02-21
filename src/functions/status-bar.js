function statusBar() {
    const userStatus = document.getElementById('user-status');

    let json = window.localStorage.getItem('user');
    const user = JSON.parse(json);

    const userName = document.createElement('p');
    const userJob = document.createElement('p');

    userName.textContent = 'Name: ' + user.name;
    userStatus.appendChild(userName);

    if(user.job) {
        userJob.textContent = 'Job: ' + user.job;
        userStatus.appendChild(userJob);
    }
}

export default statusBar;