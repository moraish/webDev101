function orderPizza() {
    console.log("Ordering Pizza!");
    setTimeout(() => {
        console.log('Eat Pizza!');
    }, 2000) 
}

orderPizza();
console.log('Call friend!');