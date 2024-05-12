const express = require('express')
const bodyParser = require('body-parser')
const app = express('express');
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello World!");
})


app.get('/conversations', (req, res) => {
    //console.log(req.headers);
    console.log(req.body);
    res.send("Conversations");
})



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
