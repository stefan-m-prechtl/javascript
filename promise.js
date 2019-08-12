const promise = new Promise((resolve, reject) => {
    let value = Math.random();
    if (value < 0.5) {
        resolve("Promise resolved: " + value);
    } else {
        reject("Promise rejected: " + value);
    }
});

promise.then(value => console.log("ok: " + value)).catch(error => console.log("error " + error));

let sofort = Promise.resolve("Sofort ok");
console.log(sofort.then.value);