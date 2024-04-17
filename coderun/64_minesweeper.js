const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let N, M, K;
let coords = [];

function aaa(board, x, y) {
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (x + i >= 0 && x + i < N && y + j >= 0 && y + j < M) {
                if (board[x + i][y + j] === '*') {
                    continue;
                }
                board[x + i][y + j] += 1;
            }
        }
    }
}

rl.on('line', (line) => {
    if (!K) {
        [N, M, K] = line.split(' ').map(Number);
        if (K === 0) {
            let board = new Array(N).fill(0).map(() => new Array(M).fill(0));
            console.log(board.map(row => row.join(' ')).join('\n'));
            rl.close();
        }
    } else if (coords.length < K) {
        coords.push(line.split(' ').map(Number));
        if (coords.length === K) {
            let board = new Array(N).fill(0).map(() => new Array(M).fill(0));
            for (let coord of coords) {
                board[coord[0] - 1][coord[1] - 1] = '*';
                aaa(board, coord[0] - 1, coord[1] - 1);
            }
            console.log(board.map(row => row.join(' ')).join('\n'));

            rl.close();
        }
    }
})