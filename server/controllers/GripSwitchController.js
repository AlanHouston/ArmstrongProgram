const GripSwitch = require("../models/GripSwitchModel");

var date = new Date();
var newDate= (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();

exports.list =  function list(req, res) {
    GripSwitch.find().exec().then(g=>{
        return res.json(g);
    });
}

exports.create =  function create(req, res) {
    let newGripSwitch = new GripSwitch({
        date:newDate,
        overHandReps:req.body.overHandReps,
        inwardReps:req.body.inwardReps,
        wideReps:req.body.wideReps,
        numberOfSets:req.body.numberOfSets,
        total:req.body.total
    });
    newGripSwitch.save();
    return res.json(newGripSwitch);
}