const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n = new Set();
let m = new Set();

function difference(setA, setB) {
    let differenceSet = new Set(setA)
    for (let i of setB) {
        differenceSet.delete(i)
    }
    return differenceSet
}

rl.on('line', (line) => {
    if (n.size === 0) {
        line.split(' ').map(Number).forEach(num => n.add(num));
    } else {
        for (let i = 0; i < line.length; i++) {
            m.add(Number(line[i]));
        }

        let a = difference(m, n);
        console.log(a.size);

        rl.close();
    }
});