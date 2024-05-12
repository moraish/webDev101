const e = require('express');
const express = require('express');
const app = express();
const PORT = 3000;


app.get('/health-checkup', (req, res) => {
    // validation logic here
    console.log("Query Params -> ", req.query);
    if(req.query.kidneyId != 1 && req.query.kidneyId != 2) {
        res.status(403).json({
            msg: "incorrect input parameters!"
        })
    }
    // console.log("Headers are -> ",req.headers);

    if(req.headers.username != 'moraish' && req.headers.password != 'pass') {
        res.status(403).json({
            msg: "user is not logged in!"
        })
    }
    //
    res.send("Health is okay!");
})

app.listen(PORT, () => {
    console.log(`Listening on port : ${PORT}`);
})