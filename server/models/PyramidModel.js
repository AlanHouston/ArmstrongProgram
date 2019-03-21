const mongoose = require('mongoose');

var pyramidSchema = new mongoose.Schema({
    date: String,
    missedSet:Number,
    //"how many did you do on the missed set?"
    lastSet:Number,
    max:Number,
    total:Number
})

module.exports = mongoose.model('Pyramid', pyramidSchema);

// {
//     "date":"3/12/2019",
//     "missedSet": ,
//     "lastSet"; ,
//     "total": 
// }