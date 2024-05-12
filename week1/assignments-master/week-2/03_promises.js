// Better way to write callbacks or async calls. 

// How to create our own Async function?
// We wrap around another Async function. i.e. call a async function in our function body.


// async await promises

// function myOwnSetTimeOut() {
//     setTimeout(function() {
//         console.log("Hi after 1 sec.");
//         setTimeout(function() {
//             console.log('Hi There.')
//         }, 2000);
//         setTimeout(function () {
//             console.log("Hello after 3 sec.")
//         }, 3000);
    
//     }, 1000);
// }



// Promisify this async function

function promisify_fn(duration) {
    const p = new Promise(function(resolve) { // resolve is also a function
        setTimeout(resolve, duration);
    });

    return p;
}

const ans = promisify_fn(1000);
ans.then(function () {
    console.log('Hi after 1 Sec');
});
console.log(ans)


// watch a youtube video on this.