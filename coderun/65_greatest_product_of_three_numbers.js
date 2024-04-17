const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let positiveNumbers = [];
let negativeNumbers = [];

rl.on('line', (line) => {
    const numbers = line.split(' ').map(Number).map(num => num >= 0 ?
        positiveNumbers.push(num) :
        negativeNumbers.push(num));
    positiveNumbers.sort((a, b) => b - a);
    negativeNumbers.sort((a, b) => a - b);
    if (positiveNumbers.length + negativeNumbers.length === 3) {
        console.log(negativeNumbers.concat(positiveNumbers).join(' '));
    } else if (positiveNumbers.length >= 3) {
        if (negativeNumbers.length >= 2) {
            let posProduct = positiveNumbers[0] * positiveNumbers[1] * positiveNumbers[2];
            let negProduct = negativeNumbers[0] * negativeNumbers[1] * positiveNumbers[0];
            console.log(posProduct > negProduct ?
                positiveNumbers.slice(0, 3).join(' ') :
                negativeNumbers.slice(0, 2).concat(positiveNumbers[0]).join(' '));
        } else {
            console.log(positiveNumbers.slice(0, 3).join(' '));
        }
    } else if (negativeNumbers.length >= 3) {
        if (positiveNumbers.length > 0) {
            console.log(negativeNumbers.slice(0, 2).concat(positiveNumbers[0]).join(' '));
        } else {
            console.log(negativeNumbers.slice(negativeNumbers.length - 3).join(' '));
        }
    }
    rl.close();
})