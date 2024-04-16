const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    const lines = data.split(/[\r\n]+/);
    let wordCount = {};
    let output = '';

    lines.forEach(line => {
        const words = line.split(/\s+/);
        words.forEach(word => {
            if (word) {
                const count = wordCount[word] || 0;
                output += count + ' ';
                wordCount[word] = count + 1;
            }
        });
    });

    console.log(output.trim());
});