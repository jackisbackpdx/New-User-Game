export const scoreTime = (time) => {
    if (time > 50) {
        return 'enough';
    } else if (time < 50 && time > 0) {
        return 'limited'; 
    } else {
        return 'none';
    }
};