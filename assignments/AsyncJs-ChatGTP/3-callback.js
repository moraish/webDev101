function fetchData(callback) {
    setTimeout(() => {
        callback('Data recieved');
    }, 4000)
}

function displayData(data) {
    console.log(data);
}

fetchData(displayData);