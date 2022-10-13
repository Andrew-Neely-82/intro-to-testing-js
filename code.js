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
function isVowel() {

}

//  Start with the smallest tests first.
//  Write just enough code to green the test
//  Build up functionality one small piece at a time.
//  Commit your work to git at each step.
// TODO Write each assertion, confirm the test fails, write only enough code to green that specific test, refactor, then repeat.
// TODO Remember to add and then "green" one test at a time. That's part of the fundamental approach of TDD.
// TODO Assert that:
// TODO isVowel always returns a boolean
// TODO isVowel("a") returns true
// TODO isVowel("A") returns true
// TODO isVowel("y") returns false
// TODO isVowel(4) returns false
// TODO isVowel(true) or isVowel(false) both return false
// TODO isVowel("banana") returns false
// TODO isVowel() returns false
// TODO Refactor when appropriate and possible.
// TODO Repeat until the tests are robust and the function works as intended.
// TODO Commit your work to git and push to GitHub before moving forward.