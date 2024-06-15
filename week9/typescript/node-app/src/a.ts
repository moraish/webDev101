// let x: number = 101;
// x = 'Moraish';
// console.log(x);


function greet(firstName: string) {
    console.log("Hello " + firstName);
}

function sum(a: number, b: number): number {
    return a + b;
}

function isLegal(age: number): boolean {
    if (age > 18) {
        return true;
    }
    return false;
}


function runAfter1S(fn: () => void) {
    setTimeout(fn, 1000);

}

runAfter1S(() => {
    console.log("Hi there");
});
greet("moraish");
console.log(sum(1, 3));