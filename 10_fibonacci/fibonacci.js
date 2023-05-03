function fibonacci(input) {
    if (input < 0) {
        return "OOPS";
    } else if (isNaN(input)) {
        return "DOES accept strings";
    }

    let array = [1, 1];
    for (let i = array.length; i < input; i++) {
        array.push(array[array.length - 1] + array[array.length - 2]);
    }

    return array.pop();
};

// Do not edit below this line
module.exports = fibonacci;
