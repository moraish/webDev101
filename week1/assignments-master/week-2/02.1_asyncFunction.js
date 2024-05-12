const fs = require("fs")

fs.readFile("a.txt", "utf-8", function(err, data) {
    console.log(data);
})

console.log(200);

function myAsyncFunction(cb) {
    fs.readFile('a.txt', 'utf-8', function(err, data) {
        cb(data);
    })
}

function onDone(data) {
    console.log(data);
}

myAsyncFunction(onDone);