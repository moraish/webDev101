function square(n) {
    return n*n;
}

function cube(n) {
    return n*n*n;
}

function sumOfSquare(a,b) {
    return square(a) + square(b);
}

function sumOfCubes(a, b) {
    return cube(a) + cube(b);
}

// Problem DRY - Don't repeat yourself.


// To solve
function sumOfSomething(a,b, fnToCall) {
    return fnToCall(a) + fnToCall(b);
}

console.log("Sum of squares function -> " + sumOfSquare(2,3));
console.log("Sum of cubes function -> " + sumOfCubes(2,3));
console.log("Sum of something function -> " + sumOfSomething(2,3,square));

// 2*2 + 3*3 = 4+9 = 13
// 8 + 27 = 35
