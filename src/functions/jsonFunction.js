function getUserJson() {
    const json = window.localStorage.getItem('user');
    const user = JSON.parse(json);
    return user;
}

function setUserJson(user) {
    const serialize = JSON.stringify(user);
    window.localStorage.setItem('user', serialize);
}

export { getUserJson };
export { setUserJson };