const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arrA = [];
let arrB = [];
let setB;

rl.on('line', (line) => {
    if (arrA.length === 0) {
        arrA = line.split(/\s+/).map(Number);
    } else if (arrB.length === 0) {
        arrB = line.split(/\s+/).map(Number);
        setB = new Set(arrB);
        let intersection = arrA.filter(x => setB.has(x));
        console.log(intersection.sort((a, b) => a - b).join(' '));
        rl.close();
    }
})