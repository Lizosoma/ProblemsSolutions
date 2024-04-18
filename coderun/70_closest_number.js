const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;
let array = [];
let x = 0;
let min = null;
let difference = 2000;

rl.on('line', (line) => {
    if (!n) {
        n = Number(line);
        if (n === 0) {
            console.log(0);
            rl.close();
        }
    } else if (array.length !== n) {
        array = line.split(' ').map(Number);
    } else {
        x = Number(line);
        for (let i = 0; i < n; i++) {
            let currentDifference = Math.abs(array[i] - x);
            if (currentDifference < difference || min === null) {
                difference = currentDifference;
                min = array[i];
            }
        }

        console.log(min);
        rl.close();
    }
})