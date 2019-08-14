"use strict";

class Observerable {
    constructor() {
        this.observers = [];
    };

    addObserver(observer) {
        this.observers.push(observer);
    };

    notify(data) {
        this.observers.forEach(observer => {
            observer.update(data);
        });
    }

    generateValue() {
        let val = Math.random();
        this.notify(val);
    }
}

class Observer {

    update(data) {
        console.log(data);
    }
}

let sender = new Observerable();
let receiver1 = new Observer();
let receiver2 = new Observer();
sender.addObserver(receiver1);
sender.addObserver(receiver2);

sender.generateValue();
console.log("Bye");