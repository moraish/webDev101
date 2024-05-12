// write basic express boilerplate code
// with express.json() middleware

const express = require("express");
const PORT = 3000;
const app = express();

app.use(express.json());


/* 
Create a TODO
*/
/*
1. Validation
*/


app.post('/todo', (req, res) => {

})


/* 
GET TODOS
*/
app.get('/todos', (req, res) => {

})

/* 
MARKS THE TO-DO AS COMPLETED
*/
// 
app.put('/completed', (req, res) => {

})


/* 
STARTS THE SERVER
*/
// 
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

