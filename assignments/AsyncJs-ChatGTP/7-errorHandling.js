function hello(data) {
    return new Promise((resolve, reject) => {
        if (data < 10) {
            const err = new Error("Number smaller than minimum");
            reject(err);
        }
        resolve(data);
    })
}


hello(3)
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err.message);
    })