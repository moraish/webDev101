const fs = require('fs');

function read() {
    // Function to read the file
    return new Promise((resolve, reject) => {
        fs.readFile('number.txt', 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        })
    })
}

function convert(data) {
    // Function to convert the string to an integer
    return new Promise((resolve, reject) => {
        resolve(parseInt(data));
    })
}

function multiply(data) {
    // Function to multiply the input by 37
    return new Promise((resolve, reject) => {
        resolve(data * 37);
    })
}

function display(data) {
    // Function to display the results
    console.log("inside display");
    console.log(data);
}



read()
    .then((data) => {
        return convert(data);
    })
    .then((data) => {
        return multiply(data);
    })
    .then((data) => {
        display(data);
    })