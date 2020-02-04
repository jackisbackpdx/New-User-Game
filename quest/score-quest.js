function scoreQuest(user, choice, questId, pointsDisplay) {
    user.enjoyment += choice.enjoyment;
    user.time += choice.time;
    user.completed[questId] = true;
    pointsDisplay.textContent = 'Time: ' + choice.time.toString() + ' Enjoyment: ' + choice.enjoyment.toString();
}

export default scoreQuest;