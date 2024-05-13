const express = require('express');

const app = express();

const PORT = 3000;

app.get('/health-checkup', (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;
    console.log(username, password, kidneyId);

    if(username != 'moraish' || password != 'pass') {
        res.status(411).json({
            message : 'Invalid login credentials'
        });
        return
    }

    if(kidneyId != 2 && kidneyId != 1) {
        res.status(401).json({
            message: 'Please validate your inputs'
        });
        return
    }
    else {
        res.json({
            message: 'Health Okay!'
        });
    }
})


app.listen(PORT, ()=> {
    console.log(`Listening on port ${PORT}`);
})