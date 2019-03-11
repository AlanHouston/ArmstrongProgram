const MaxDay = require("../models/MaxDayModel");

var date = new Date();
var newDate= (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();

exports.list =  function list(req, res) {
    MaxDay.find().exec().then(m=>{
        return res.json(m);
    });
}

exports.create =  function create(req, res) {
    let newMaxDay = new MaxDay({
        date:newDate,
        reps:req.body.reps,
        totalSets:req.body.totalSets,
        total:req.body.total
    });
    newMaxDay.save();
    return res.json(newMaxDay);
}
