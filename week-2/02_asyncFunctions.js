// What are sync functions -> The thread that is executing is always busy and things work in a sequence.

// This is a sync call
readFile('a.txt'); 
console.log('Hi.');

// in a scenario where readFile does not execute the thread is stuck forever. 
// it is better to do async requests at this time


function onDone(a) {
    console.log(a)
}
// readFile('a.txt', onDone);

// setTimeout(onDone, 1000);
// console.log('After Settime out.');

// Async Usecases
// 1. Reading a file
// 2. Sending a network request
// 3. Deliberate timeout


// Chain of control. When 1 sec is complete, then the onDone function is executed. 

// 3 pillars of JS execution 
// Call Stack + Web APIs + Callback queue

