// IMPORT MODULES under test here:
import { getUser, saveUser } from '../user-get-set.js';
// import example from '../src/example.js';
const test = QUnit.test;

QUnit.module('user api');

QUnit.testStart(() => {
    window.localStorage.clear();
});

test('saveUser sets user and returns on getUser, same object key-values from local storage', function(assert) {
    
    const user = {
        name: 'Torrein',
        character: 'Beer',
        time: 3,
        enjoyment: 89
    };

    saveUser(user);

    const result = getUser();

    assert.deepEqual(user, result);
});