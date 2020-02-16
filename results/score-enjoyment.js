export const scoreEnjoyment = (enjoyment) => {
    if (enjoyment >= 60) {
        return 'fun';
    } else if (enjoyment < 60 && enjoyment >= 30) {
        return 'okay';
    } else {
        return 'boring';
    }
};