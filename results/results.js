import { getUser } from '../user-get-set.js';
import loadUser from '../commons/load-user.js';
import { scoreTime } from './score-time.js';
import { scoreEnjoyment } from './score-enjoyment.js';
import { outOfTime, hasTime, hasTimeMessage } from './result-message.js';

const timeDisplay = document.getElementById('time-message');

loadUser();

const user = getUser();

const timeResult = scoreTime(user.time);
const enjoyment = scoreEnjoyment(user.enjoyment);
const timeMessage = hasTime[enjoyment];

let enjoymentMessages = null;

if (timeResult === 'none') {
    enjoymentMessages = outOfTime;
} else {
    enjoymentMessages = hasTimeMessage;
}

const enjoymentMessage = enjoymentMessages[enjoyment];

const finalMessage = `After finishing your trip, ${user.name}, the ${user.character},
${timeMessage}, and ${enjoymentMessage}`;

timeDisplay.textContent = finalMessage;