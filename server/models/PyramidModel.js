const mongoose = require('mongoose');

var pyramidSchema = new mongoose.Schema({
    date: String,
    //"on which set did you not hit the target?"
    missedSet:Number,
    //"how many did you do on the missed set?"
    lastSet:Number,
    total:Number
})

module.exports = mongoose.model('Pyramid', pyramidSchema);

