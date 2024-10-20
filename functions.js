

let add = (a, b) => {
    if (typeof(a) === "number" && typeof(b) === "number") {
        console.log(`${a} + ${b} = `, a + b);
        return a + b;
    } else {
        return "You must enter numbers.";
    };
};

let subtract = (a, b) => {
    if (typeof(a) === "number" && typeof(b) === "number") {
        console.log(`${a} - ${b} = `, a - b);
        return a - b;
    } else {
        return "You must enter numbers.";
    };
};

let multiply = (a, b) => {
    if (typeof(a) === "number" && typeof(b) === "number") {
        console.log(`${a} * ${b} = `, a * b);
        return a * b;
    } else {
        return "You must enter numbers.";
    };
};

let divide = (a, b) => {
    if (typeof(a) === "number" && typeof(b) === "number") {
        console.log(`${a} / ${b} = `, a / b);
        return a / b;
    } else {
        return "You must enter numbers.";
    };
};

module.exports = {add, subtract, multiply, divide};
