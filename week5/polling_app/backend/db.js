const mongoose = require("mongoose");
const mongoURL = 'mongodb+srv://moraishkapoor:kI2bMkCwf3Sr6FpB@pollingappcluster.vyu4zvb.mongodb.net/';


mongoose.connect(mongoURL).then(() => {
    console.log('Connected!')
});

const poll_table = mongoose.Schema({
    poll_name: String, 
    created_at: {type: Date, default: Date.now}
});

const options_table = mongoose.Schema({
    poll_name: String,
    option_id: Number, 
    option_text: String
});

const votes_table = mongoose.Schema({
    vote_id: Number, 
    poll_name: String, 
    option_id: Number,
    created_at: {type: Date, default: Date.now}
});

const poll = mongoose.model('poll', poll_table);
const options = mongoose.model('options', options_table);
const votes = mongoose.model('votes', votes_table);

module.exports = {
    poll,
    options,
    votes
};



// console.log(1);
