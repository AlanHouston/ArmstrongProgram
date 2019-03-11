const mongoose = require('mongoose');

var gripSwitchSchema = new mongoose.Schema({
    date: String,
    overHandReps: Number,
    inwardReps: Number,
    wideReps: Number,
    numberOfSets: Number,
    total: Number
})

module.exports = mongoose.model('GripSwitch', gripSwitchSchema);

