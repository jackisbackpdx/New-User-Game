import quests from '../home-page/api.js';
import loadUser from '../commons/load-user.js';
import createLink from './create-quest-links.js';
import completedLink from './create-completed-links.js';
import hasCompletedAllQuests from './completed-all-quests.js';
import outOfTime from '../commons/out-of-time.js';
import { getUser } from '../user-get-set.js';

loadUser();

const user = getUser();

if (outOfTime(user) || hasCompletedAllQuests(quests, user)) {
    window.location = '../results';
}

const nav = document.getElementById('quests');

for (let i = 0; i < quests.length; i++) {
    let quest = quests[i];
    let questDisplay = null;
    if (user.completed[quest.id]) {
        questDisplay = completedLink(quest);
    } else {
        questDisplay = createLink(quest);
    }
    nav.appendChild(questDisplay);
}