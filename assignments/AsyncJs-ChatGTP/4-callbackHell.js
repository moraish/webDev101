/*
1. Read the number.txt file
2. Convert the string into an integer and save it in a variable. 
3. Multiply the number by 37.
4. Call a function that displays the result. 
*/

const fs = require('fs');

function read(path, callback) {
    // Function to read the file
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
            console.error("File not read!");
        }

        console.log("Inside read");
        console.log(data);
        callback(data);
    });

}

function convert(data, callback) {
    // Function to convert the string to an integer
    console.log("inside convert");
    data = parseInt(data);
    callback(data);

}

function multiply(data, callback) {
    // Function to multiply the input by 37
    console.log("inside multiply");
    callback(data * 37);
}

function display(data) {
    // Function to display the results
    console.log("inside display");
    console.log(data);
}

// callback hell
read('number.txt', (data) => {
    convert(data, (data) => {
        multiply(data, (data) => {
            display(data);
        })
    })
})

