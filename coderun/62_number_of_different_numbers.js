const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    let arr = line.split(' ').map(Number);
    let numSet = new Set(arr);

    console.log(numSet.size);
    rl.close();
})