const express = require('express');

const app = express();
const PORT = 3000;

app.get('/home', (req,res) => {
    console.log("Hello World!");
    
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})