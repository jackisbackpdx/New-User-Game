function scoreQuest(user, choice, questId) {
    user.enjoyment += choice.enjoyment;
    user.time += choice.time;
    user.completed[questId] = true;
}

export default scoreQuest;