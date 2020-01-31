function saveUser(user) {
    const json = JSON.stringify(user);
    localStorage.setItem('user', json);
}

function getUser() {
    const json = localStorage.getItem('user');
    if (!json) return null;
    const user = JSON.parse(json);
    return user;
}

export { saveUser, getUser };