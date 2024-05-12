const express = require('express');
const app = express();
const PORT = 3000;


function loginAuthMiddleware(req, res, next) {
    console.log('Inside login authentication middleware');
    if(req.headers.username != 'moraish' && req.headers.password != 'pass') {
        res.status(403).json({
            msg: "user is not logged in!"
        })
    }
    next();
}

function inputValidationMiddleware(req, res, next) {
    console.log('Inside input authentication middleware');
    if(req.query.kidneyId != 1 && req.query.kidneyId != 2) {
        res.status(403).json({
            msg: "incorrect input parameters!"
        });
    }
    next();
}

app.get('/health-checkup', loginAuthMiddleware, inputValidationMiddleware,  (req, res) => {    
    res.send("Health is okay!");
})

app.listen(PORT, () => {
    console.log(`Listening on port : ${PORT}`);
})