"use strict";

class EventBroker {

    constructor() {
        this.receivers = [];
    }

    handleEvent(sender, e) {
        console.log(`EventBroker got event: '${e}' from ${sender}`);
        this.receivers.forEach(receiver => {
            if (receiver != sender) {
                receiver.onEvent(e)
            }
        });
    }

    addReceiver(receiver) {
        this.receivers.push(receiver);
    }
}

class Emitter {
    constructor(eventbroker) {
        this.eventbroker = eventbroker;
        this.eventbroker.addReceiver(this);
    }

    emitEvent(e) {
        this.eventbroker.handleEvent(this, e);
    }

    onEvent(e) {
        console.log(`Emitter got event: '${e}'`);
    }
}


class Sender extends Emitter {
    constructor(eventbroker) {
        super(eventbroker);
    }

    doSomething() {
        super.emitEvent("neuer Event vom Sender");
    }

}

class Receiver01 extends Emitter {
    constructor(eventbroker) {
        super(eventbroker);
    }

    onEvent(e) {
        console.log(`Receiver01 got event: '${e}'`);
    }
}

class Receiver02 extends Emitter {
    constructor(eventbroker) {
        super(eventbroker);
    }

    onEvent(e) {
        console.log(`Receiver02 got event: '${e}'`);
    }
}


let eventbroker = new EventBroker();
let sender = new Sender(eventbroker);
let receiver1 = new Receiver01(eventbroker);
let receiver2 = new Receiver02(eventbroker);

sender.doSomething();


console.log("Bye!");