import loadUser from '../commons/load-user.js';
import findById from '../commons/find-by-ids.js';
import quests from '../home-page/api.js';
import createChoice from './create-choice.js';
import { getUser, saveUser } from '../user-get-set.js';
import scoreQuest from './score-quest.js';

loadUser();

const title = document.getElementById('title');
const image = document.getElementById('img');
const choiceForm = document.getElementById('choice-form');
const choiceAppend = document.getElementById('choices');
const result = document.getElementById('result');
const resultDescription = document.getElementById('result-description');
const button = document.querySelector('button');
const pointsDisplay = document.getElementById('points-display');
const backToMap = document.querySelector('a');

const param = new URLSearchParams(window.location.search);
const id = param.get('id');

const quest = findById(quests, id);
title.textContent = quest.title;
image.src = quest.image;

let choicesObject = quest.choices;
for (let i = 0; i < choicesObject.length; i++) {
    const createdInput = createChoice(choicesObject[i]);
    choiceAppend.appendChild(createdInput);
}

button.addEventListener('click', function(e) {
    e.preventDefault();
    let form = new FormData(choiceForm);
    let choiceId = form.get('choice');

    const choice = findById(quest.choices, choiceId);

    resultDescription.textContent = choice.result;
    result.classList.remove('hidden');
    backToMap.classList.remove('hidden');
    result.style.display = 'flex';
    choiceForm.classList.add('hidden');

    const user = getUser();

    scoreQuest(user, choice, quest.id, pointsDisplay);

    saveUser(user);
});