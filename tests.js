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

describe(`isEven`, function () {
    it('should be defined as a function', function () {
        expect(typeof isEven).toBe('function')
    });
    it('should return a boolean no matter the input', function () {
        expect(isEven()).toBe(false)
    });
    it('should return true when passed 2', function () {
        expect(isEven(2)).toBe(true)
    });
    it('returns true when executed with -4', function () {
        expect(isEven(-4)).toBe(true)
    });
    it('returns false when executed with 3', function () {
        expect(isEven(3)).toBe(false)
    });
    it('returns false when called with "banana"', function () {
        expect(isEven("banana")).toBe(false)
    });
    it('returns true when called with "8"', function () {
        expect(isEven("8")).toBe(true)
    });
    it('returns false when called with Infinity', function () {
        expect(isEven(Infinity)).toBe(false)
    });
    it('return false when called with a boolean input like true', function () {
        expect(isEven(true)).toBe(false)
    });
    it('return false when called with a boolean input like false', function () {
        expect(isEven(false)).toBe(false)
    });
    it('returns false when called without an argument', function () {
        expect(isEven()).toBe(false)
    });
})

describe(`isVowel`, function () {
    it('should be defined as a function', function () {
        expect(typeof isVowel).toBe('function')
    });
    it('"a" returns true', function () {
        expect(isVowel("a")).toBe(true)
    });
    it('"A" returns true', function () {
        expect(isVowel("A")).toBe(true)
    });
    it('"y" returns false', function () {
        expect(isVowel("y")).toBe(false)
    });
    it('4 returns false', function () {
        expect(isVowel(4)).toBe(false)
    });
    it('should return false if true or false is passed in', function () {
        expect(isVowel(typeof isVowel() === "boolean")).toBe(false)
    });
    it('"banana" should return false ', function () {
        expect(isVowel("banana")).toBe(false)
    });
    it('should return false if nothing is passed in ', function () {
        expect(isVowel()).toBe(false)
    });
})

describe(`add`, function () {
    it('(2, 3) returns 5', function () {
        expect(add(2, 3)).toBe(5)
    });
    it('(-3, -9) returns -12', function () {
        expect(add(-3, -9)).toBe(-12)
    });
    it(`add("5", 6) returns 11`, function () {
        expect(add("5", 6)).toBe(11)
    });
    it('("-4", "10") returns 6', function () {
        expect(add("-4", "10")).toBe(6)
    });
    it('("banana", "split") returns NaN', function () {
        expect(add("banana", "split")).toBe(NaN)
    });
})