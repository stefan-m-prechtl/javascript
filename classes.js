"use strict";

// Helper
function sysout(msg) {
    console.log(msg);
}

class Car {
    constructor(brand = 'bmw') {
        this.brand = brand;
    }
}

let vw = new Car('VW');
let bmw = new Car();

sysout(vw);
sysout(bmw);
sysout(typeof Car);

function carFactoy(car) {
    return new car();
}

let bmw2 = carFactoy(Car);
sysout(bmw2);