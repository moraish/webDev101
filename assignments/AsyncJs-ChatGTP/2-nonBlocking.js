// Non-blocking Code Example
const fs = require('fs');
fs.readFile('data.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
console.log('This line is printed while the file is being read');
