

let add = (a, b) => {
    if (typeof(a) === "number" && typeof(b) === "number") {
        console.log(`${a} + ${b} = `, a + b);
        return a + b;
    } else if (b === undefined) {
        throw new Error("You only entered one input, you must enter two numbers.");
    } else {
        throw new Error("You must enter two numbers");
    };
};

let subtract = (a, b) => {
    if (typeof(a) === "number" && typeof(b) === "number") {
        console.log(`${a} - ${b} = `, a - b);
        return a - b;
    } else if (b === undefined) {
        throw new Error("You only entered one input, you must enter two numbers.");
    } else {
        throw new Error("You must enter two numbers");
    };
};

let multiply = (a, b) => {
    if (typeof(a) === "number" && typeof(b) === "number") {
        console.log(`${a} * ${b} = `, a * b);
        return a * b;
    } else if (b === undefined) {
        throw new Error("You only entered one input, you must enter two numbers.");
    } else {
        throw new Error("You must enter two numbers");
    };
};

let divide = (a, b) => {
    if (typeof(a) === "number" && typeof(b) === "number") {
        console.log(`${a} / ${b} = `, a / b);
        return a / b;
    } else if (b === undefined) {
        throw new Error("You only entered one input, you must enter two numbers.");
    } else {
        throw new Error("You must enter two numbers");
    };
};

module.exports = {add, subtract, multiply, divide};
