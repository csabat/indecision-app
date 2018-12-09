const square = function(x) {
    return x*x;
};

//const squareArrow = (x) => { return x*x };

const squareArrow = (x) => x * x;

console.log(squareArrow(8));

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Csabi Toth'));

const add = function (a,b) {
    return a + b;
}


const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());