"use strict";

function* counter() {
    let idx = 0;
    while (true) {
        yield ++idx;
    }
}
const numbers = counter();


for (let index = 0; index < 5; index++) {
    console.log(numbers.next().value);
}