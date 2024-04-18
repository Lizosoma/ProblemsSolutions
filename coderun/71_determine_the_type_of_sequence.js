const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let sequence = [];
const end = -2 * 10 ** 9;

function typeOfSequence(sequence) {
    let increase = false;
    let decrease = false;
    let equal = false;
    for (let i = 0; i < sequence.length - 1; i++) {
        let current = sequence[i];
        let next = sequence[i + 1];
        if (current < next) {
            increase = true;
        }
        if (current > next) {
            decrease = true;
        }
        if (current === next) {
            equal = true;
        }
    }
    if (increase && !decrease && !equal) {
        return 'ASCENDING';
    } else if (increase && !decrease && equal) {
        return 'WEAKLY ASCENDING';
    } else if (!increase && decrease && !equal) {
        return 'DESCENDING';
    } else if (!increase && decrease && equal) {
        return 'WEAKLY DESCENDING';
    } else if (!increase && !decrease && equal) {
        return 'CONSTANT';
    } else {
        return 'RANDOM';
    }
}

rl.on('line', (line) => {
    if (Number(line) !== end) {
        sequence.push(Number(line));
    } else {
        console.log(typeOfSequence(sequence));
        rl.close();
    }
})