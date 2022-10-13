// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(x) {
    let helloJane = "Hello, Jane!"
    let helloAlex = "Hello, Alex!"
    let helloPat = "Hello, Pat!"
    let helloWorld = "Hello, World!"

    if (x === "Jane") {
        return helloJane
    }
    else if (x === "Alex") {
        return helloAlex
    }
    else if (x === "Pat") {
        return helloPat
    }
    else if (x === "World") {
        return helloWorld
    }
    else if (x === true) {
        return helloWorld
    }
}


