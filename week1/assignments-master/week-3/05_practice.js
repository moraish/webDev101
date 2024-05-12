const express = require('express');
const PORT = 3000;
const app = express();

app.use(express.json());

app.get('/home', (req, res) => {
    console.log(req.body);
    console.log(req.query);
    console.log(req.headers);
    return;
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})