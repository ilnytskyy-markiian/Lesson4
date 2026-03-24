// function showMessage(name, city) {
//     console.log(`Hello, my name is ${name}. I'm from ${city}`);
// }

// showMessage("Nata", "Kyiv");
// showMessage("Olya", "Lviv");

// const userName = "Ann";

// const sayHi = function() {
//     let message = "Hello, my name is "
//     console.log(message + userName);
// }

// sayHi();

// function sum(a, b) {
//     let c = a + b;
//     return c;
// }

// let result = sum(7, 8);

// console.log(result);

// const testFunc = function(a, b) {
//     console.log("a: " + a + "; b: " + b);

//     return;

//     a + b;
// }

// testFunc(5, 8);

// const a = function() {
//     c();
//     console.log("Function a");
//     b();
// }

// const b = function() {
//     console.log("Function b");
// }

// const c = function() {
//     console.log("Function c");
// }

// a();

// const addName = function() {
//     const arg = Array.from(arguments);
//     console.log(arguments);
//     console.log(arg);
// }

// addName(1, 3, 5);

// addName(1, 3, 5, 67, 55);

// const addName = function(...args) {
//     console.log(args);
// }

// addName(1, 3, 5);

// addName(1, 3, 5, 67, 55);

function ask(question, yes, no) {
    if(confirm(question)) {
        yes();
    } else {
        no();
    }
}

function showOk() {
    console.log("You say ok");
}

function showCancel() {
    console.log("You say No");
}

ask("Yes or no?", showOk, showCancel);