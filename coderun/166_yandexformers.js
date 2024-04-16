module.exports = function (N, staff, K) {
    let count = new Array(26).fill(0);

    for (let i = 0; i < N; i++) {
        count[staff[i]]++;
    }

    let x = 0;
    for (let i = 25; i >= 0 && K > 0; i--) {
        while (count[i] > 0 && K > 0) {
            x += i;
            count[i]--;
            K--;
        }
    }

    return x;
}