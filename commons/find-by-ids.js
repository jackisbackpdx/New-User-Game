function findById(array, id) {
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (item.id === id) {
            return item;
        }
    }
}

export default findById;