import makeUser from './make-user.js';
import { saveUser } from '../user-get-set.js';

const button = document.querySelector('button');
const userSignUp = document.querySelector('form');

button.addEventListener('click', function(e) {
    e.preventDefault();

    const formData = new FormData(userSignUp);
    const user = makeUser(formData);

    saveUser(user);

    window.location = '../map';
});