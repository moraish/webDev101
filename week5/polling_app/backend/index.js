const express = require('express');
const { poll_schema, vote_schema } = require('./types');
const { poll, options } = require('./db');
const app = express();
const PORT = 3000;

app.use(express.json());


app.post('/create_poll', async (req, res) => {
    const payload = req.body;
    const validate = poll_schema.safeParse(payload);

    if(!validate.success) {
        const errorMsg = JSON.parse(validate.error.message);
        res.status(411).json({"message": errorMsg[0].message});
    }
    // put it in mongo db 
    await poll.create({
        poll_name: payload.poll_name
    }).then(() => {
        console.log("poll created!")
    })

    let i = 0;
    while(i < payload.poll_options.length) {
        i = i + 1;
        await options.create({
            poll_name: payload.poll_name,
            option_id: i,
            option_text: payload.poll_options[i-1]
        }).then(() => {
            console.log('Options Added')
        })
    }

    res.json({
        msg: "Poll Created!"
    });
    
})

app.put('/vote', (req, res) => {
    const payload = req.body;
    const validate = vote_schema.safeParse(payload);
    if(!validate.success) {
        const errorMsg = JSON.parse(validate.error.message);
        res.status(411).json({"message" : errorMsg[0].message});
    }
    res.send("Vote Cast!");
})

app.get('/view_results', (req, res) => {

})


app.listen(PORT, ()=> {
    console.log(`Listening on port ${PORT}`);
})

