// username: moraishkapoor
// password: kAwQLXKU2dC0tiio

const mongoose = require('mongoose');

const uri = "mongodb+srv://moriash:abcd%401234@clustertodoapp.jzt8j3a.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri);



const toDoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
 })

const todo = mongoose.model('todos', toDoSchema);

module.exports = {
    todo
 }