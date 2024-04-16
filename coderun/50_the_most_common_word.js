const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let obj = {};
let maxWord = '';
let maxCount = 0;

rl.on('line', (line) => {
    const words = line.split(/\s+/);
    words.forEach((word) => {
        if (word) {
            obj[word] = (obj[word] || 0) + 1;

            if (obj[word] > maxCount) {
                maxCount = obj[word];
                maxWord = word;
            } else if (obj[word] === maxCount && word < maxWord) {
                maxWord = word;
            }
        }
    });
}).on('close', () => {
    console.log(maxWord);
});