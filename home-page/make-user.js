function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        character: formData.get('character'),
        enjoyment: 0,
        time: 100,
        completed: {},
    };
    return user;
}

export default makeUser;