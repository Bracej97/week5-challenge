const {add, subtract, multiply, divide} = require("../functions");

describe("Calculator", () => {
    //Test case for add function
    describe("addFunction", () => {
        test("adds 5 and 10 to give 15", () => {
            expect(add(10, 5)).toBe(15);
        });

        test("adds 10 and -5 to give 5, testing negative numbers", () => {
            expect(add(10, -5)).toBe(5);
        });

        test("adds 10 and 0 to give 10, testing adding 0", () => {
            expect(add(10, 0)).toBe(10);
        });

        test("should throw an error if the first variable is not a number", () => {
            expect(() => add("10", 5)).toThrow(new Error("You must enter two numbers"));
        });

        test("should throw an error if the second variable is not a number", () => {
            expect(() => add(10, "5")).toThrow(new Error("You must enter two numbers"));
        });

        test("should throw an error if both variables are not numbers", () => {
            expect(() => add("test", "5")).toThrow(new Error("You must enter two numbers"));
        });

        test("should throw an error if not enough variables entered", () => {
            expect(() => add(5)).toThrow(new Error("You only entered one input, you must enter two numbers."));
        });
    });

    //Test the subtract function
    describe("subtractFunction", () => {
        test("subtracts 20 and 8 to give 12", () => {
            expect(subtract(20, 8)).toBe(12);
        });

        test("subtract 10 and -5 to give 15, testing negative numbers", () => {
            expect(subtract(10, -5)).toBe(15);
        });

        test("subtract 10 and 0 to give 10, testing subtracting 0", () => {
            expect(subtract(10, 0)).toBe(10);
        });

        test("subtract 0 and 12 to give -12, testing subtracting from 0", () => {
            expect(subtract(0, 12)).toBe(-12);
        });

        test("should throw an error if the first variable is not a number", () => {
            expect(() => subtract("10", 5)).toThrow(new Error("You must enter two numbers"));
        });

        test("should throw an error if the second variable is not a number", () => {
            expect(() => subtract(10, "5")).toThrow(new Error("You must enter two numbers"));
        });

        test("should throw an error if both variables are not numbers", () => {
            expect(() => subtract("test", "5")).toThrow(new Error("You must enter two numbers"));
        });

        test("should throw an error if not enough variables entered", () => {
            expect(() => subtract(5)).toThrow(new Error("You only entered one input, you must enter two numbers."));
        });
    });

    //Test the multiply function
    describe("multiplyFunction", () => {
        test("multiply 3 and 8 to give 24", () => {
            expect(multiply(3, 8)).toBe(24);
        });

        test("multiply 10 and -5 to give -50, testing negative numbers", () => {
            expect(multiply(10, -5)).toBe(-50);
        });

        test("multiply -3 and -5 to give -50, testing negative numbers", () => {
            expect(multiply(-3, -5)).toBe(15);
        });

        test("multiply 10 and 0 to give 0, testing multiply 0", () => {
            expect(multiply(10, 0)).toBe(0);
        });

        test("multiply 0 and 12 to give 0, testing multiply by 0", () => {
            expect(multiply(0, 12)).toBe(0);
        });

        test("should throw an error if the first variable is not a number", () => {
            expect(() => multiply("10", 5)).toThrow(new Error("You must enter two numbers"));
        });

        test("should throw an error if the second variable is not a number", () => {
            expect(() => multiply(10, "5")).toThrow(new Error("You must enter two numbers"));
        });

        test("should throw an error if both variables are not numbers", () => {
            expect(() => multiply("test", "5")).toThrow(new Error("You must enter two numbers"));
        });

        test("should throw an error if not enough variables entered", () => {
            expect(() => multiply(5)).toThrow(new Error("You only entered one input, you must enter two numbers."));
        });
    });

    //Test the divide function
    describe("divideFunction", () => {
        test("divide 24 and 8 to give 3", () => {
            expect(divide(24, 8)).toBe(3);
        });

        test("divide 10 and -5 to give -2, testing negative numbers", () => {
            expect(divide(10, -5)).toBe(-2);
        });

        test("divide 10.5 and 2 to give 5.25, testing floats", () => {
            expect(divide(10.5, 2)).toBe(5.25);
        });

        test("divide 10 and 2.5 to give 4, testing floats", () => {
            expect(divide(10, 2.5)).toBe(4);
        });

        test("divide 10 and 0 to give 0, testing divide by 0", () => {
            expect(divide(10, 0)).toBe(Infinity);
        });

        test("divide 0 and 12 to give 0, testing dividing 0", () => {
            expect(divide(0, 12)).toBe(0);
        });

        test("should throw an error if the first variable is not a number", () => {
            expect(() => divide("10", 5)).toThrow(new Error("You must enter two numbers"));
        });

        test("should throw an error if the second variable is not a number", () => {
            expect(() => divide(10, "5")).toThrow(new Error("You must enter two numbers"));
        });

        test("should throw an error if both variables are not numbers", () => {
            expect(() => divide("test", "5")).toThrow(new Error("You must enter two numbers"));
        });

        test("should throw an error if not enough variables entered", () => {
            expect(() => divide(5)).toThrow(new Error("You only entered one input, you must enter two numbers."));
        });
    });
})
