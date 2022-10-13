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

// TODO NOT DONE!

function isFive(x) {
    if (x === 5) {
        return true
    }
    if (typeof x !== "number" || x !== 5) {
        return false
    }
}

//  Inside of tests.js, write a describe block for our new isFive function.
//  As your first, failing test, write an it and an expect asserting that a function named isFive exists.
//  Run the tests by refreshing report.html to show the red, failing test.
//  Write just enough code inside of code.js to define an empty function for isFive.
//  Now, refresh report.html to ensure that all tests are green.
//  What other tests and implementation cycles should you do for isFive?
//  Ensure that isFive returns a boolean no matter what the input
//  Ensure that isFive returns true when passed 5
//  What about if we pass in the string "5"? Do you want isFive to return true for that?
//  If so, write the test, ensure that the test is failing, and then write the implementation
//  Commit your work to git and push to GitHub before moving forward.




// TODO NOT DONE!
function sayGoodbye() {
}

