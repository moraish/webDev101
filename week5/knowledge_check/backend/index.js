const express = require('express');
const { createToDo, updateToDo } = require('./types');
const { todo } = require('./db');
const app = express();
const PORT = 3000;

app.use(express.json())


app.post('/todo', async function(req,res) {
    const createPayload = req.body;
    const parsedPayload = createToDo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "Incorrect inputs recieved"
        })
        return;
    }
    // put it in mongodb

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "ToDo created."
    })


})

app.post('/todos', async function(req,res) {
    // get files from mongodb
    const todos = await todo.find({});
    res.json(todos);
})

app.put('/complete', async (req,res) => {
    const createPayload = req.body;
    const parsedPayload = updateToDo.parse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "Id does not exist."
        })
    }
    
    // update in mongodb
    await todo.update({
        _id: res.body.id
    },
    {
        completed: true
    })
    res.json({
        msg: "Todo marked as completed."
    })


})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})