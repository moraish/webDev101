// Blocking Code Example
const fs = require('fs');
const data = fs.readFileSync('data.txt', 'utf-8'); // Synchronous method
console.log(data);
console.log('This line will wait until the file is read');
