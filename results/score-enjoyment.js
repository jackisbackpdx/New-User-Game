export const scoreEnjoyment = (enjoyment) => {
    if (enjoyment > 70) {
        return 'fun';
    } else if (enjoyment <= 70 && enjoyment >= 30) {
        return 'okay';
    } else {
        return 'boring';
    }
};