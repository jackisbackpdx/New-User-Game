import { getUser } from '../user-get-set.js';
import outOfTime from './out-of-time.js';

function loadUser() {
    const image = document.getElementById('avatar');
    const name = document.getElementById('name');
    const enjoyment = document.getElementById('enjoyment');
    const time = document.getElementById('time');

    const user = getUser();
    
    if (!user) {
        window.location = './';
    }

    image.src = '../assets/' + user.character + '.png';
    name.textContent = user.name;
    enjoyment.textContent += user.enjoyment;

    if (outOfTime(user)) {
        time.textContent = 'You are out of time';
    } else {
        time.textContent += user.time;
    }
}

export default loadUser;