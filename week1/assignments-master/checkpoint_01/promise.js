// producers

let promise = new Promise(function(resolve, reject) {
    // complex operation
    setTimeout(() => {
        // resolve('Yey');
        reject(new Error("Error"));
        console.log(promise);
    }, 2000);
});

console.log(promise);


// consumers

promise.then(
    function (result) {
        console.log('Successful!');
    },
    function(error) {
        console.log('Failure!');
    }
);


// finally 

promise.finally(()=> {
    console.log("Finally Executing");
}).then((result)=> {
    console.log("For successful execution! ", result);
}, (result) => {
    console.log("For failed execution ", result);
})