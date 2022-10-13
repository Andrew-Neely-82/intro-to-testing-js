// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
        expect(helloWorld()).not.toBe(undefined);
    });
});

describe(`sayHello`, function(){
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it(`should return "Hello, Jane!"`, function () {
        expect(sayHello(`Jane`)).toBe(`Hello, Jane!`)
    });
    it(`should return "Hello, Alex!"`, function () {
        expect(sayHello(`Alex`)).toBe(`Hello, Alex!`)
    });
    it(`should return "Hello, Pat!"`, function () {
        expect(sayHello(`Pat`)).toBe(`Hello, Pat!`)
    });
    it(`undefined should return Hello, World!`, function () {
        expect(sayHello()).toBe("Hello, World!")
    });
    it(`true should return Hello, World!`, function () {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it(`false should return Hello, World!`, function () {
        expect(sayHello(false)).toBe("Hello, World!")
    });
    it(`"5" should return Hello, World!`, function () {
        expect(sayHello(`5`)).toBe("Hello, World!")
    });
    it(`null should return Hello, World!`, function () {
        expect(sayHello(null)).toBe("Hello, World!")
    });
    it(`Empty Strings should return Hello, World!`, function () {
        expect(sayHello(``)).toBe("Hello, World!")
    });
    it(`Arrays should return Hello, World!`, function () {
        expect(sayHello([2, 3, 4])).toBe("Hello, World!")
    });
    it(`sayHello should return Hello, World!`, function () {
        expect(sayHello(sayHello)).toBe("Hello, World!")
    });

});

describe('isFive', function() {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it(`any input should return a boolean`, function () {
        expect(isFive()).toBe( false)
    });
    it('5 should return true', function () {
        expect(isFive(5)).toBe(true)
    });
    it('"5" should return false', function () {
        expect(isFive("5")).toBe(false)
    });
});


// What about if we pass in the string "5"? Do you want isFive to return true for that?
// If so, write the test, ensure that the test is failing, and then write the implementation




