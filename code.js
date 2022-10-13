// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}

// TODO DONE!

function sayHello(x) {
    if (typeof x !== "string" || x === "" || x === "5") {
        return "Hello, World!"
    }
    else {
        return `Hello, ${x}!`
    }
}

// TODO DONE!

function isFive(x) {
    if (x === 5) {
        return true
    }
    if (typeof x !== "number" || x !== 5) {
        return false
    }
}

// TODO DONE!

function isEven(x) {
    if (typeof x === "boolean") {
        return false
    }
    return x % 2 === 0;
}

// TODO NOT DONE!
function isVowel(x) {
    return x === "a" ||
        x === "e" ||
        x === "i" ||
        x === "o" ||
        x === "u" ||
        x === "A" ||
        x === "E" ||
        x === "I" ||
        x === "O" ||
        x === "U";
}

function add(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return NaN
    }
    else {
        return parseFloat(a) + parseFloat(b)
    }
}


// Assert that add:
// add(2, 3) returns 5
// add(-3, -9) returns -12
// add("5", 6) returns 11
// add("-4", "10") returns 6
// TODO add("banana", "split") returns NaN
// TODO add(2, "apples") returns NaN
// TODO add() returns NaN