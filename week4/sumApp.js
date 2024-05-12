const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors());


app.get('/sum', (req, res) => {
    const num1 = req.query.a;
    const num2 = req.query.b;
    const ans = parseInt(num1) + parseInt(num2);
    console.log(ans);

    res.status(200).send(ans.toString());
})

app.listen(3000);