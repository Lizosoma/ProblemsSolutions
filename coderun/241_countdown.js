function createCountdown(n) {
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        n = 0;
    }

    return function() {
        if (n <= 0) {
            return 0;
        }
        return n--;
    }
}

module.exports = createCountdown