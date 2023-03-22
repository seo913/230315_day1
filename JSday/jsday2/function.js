function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multply(a, b) {
    return a * b ;
}

function divide(a, b) {
    return a / b ;
}


const calculator = {
    add: function (a, b){
        return a+ b;
    },
    subtract: function (a, b){
        return a- b;
    },
    multply: function (a, b){
        return a* b;
    },
    divide: function (a, b){
        return a/ b;
    }
};

    let result = calculator.multply(3, 4);
    console.log(result);

    result = calculator.add(3, 4);
    console.log(result);

