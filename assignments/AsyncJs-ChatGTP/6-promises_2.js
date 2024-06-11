function hello(data) {
    return new Promise((resolve, reject) => {
        if (data < 10) {
            reject(data);
        }
        resolve(data, "yey");
    })
}


hello(11)
    .then((data, message) => {
        console.log(data);
        console.log(message)

    })