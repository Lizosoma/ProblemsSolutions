const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;
const synonyms = {};
let inputLinesCount = 0;

rl.on('line', (line) => {
    if (!n) {
        n = parseInt(line);
    } else {
        if (inputLinesCount < n) {
            const [word1, word2] = line.split(' ');
            synonyms[word1] = word2;
            synonyms[word2] = word1;
            inputLinesCount++;
        } else {
            console.log(synonyms[line]);
            rl.close();
        }
    }
})