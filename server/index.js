const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect("mongodb://roger:roger33@ds145573.mlab.com:45573/armstrong", {useNewUrlParser: true})

const MaxEffortRoutes = require("./routes/MaxEffortRoutes");
const PyramidRoutes = require("./routes/PyramidRoutes");
const GripSwitchRoutes = require("./routes/GripswitchRoutes");
const MaxDayRoutes = require("./routes/MaxDayRoutes");

app.use(bodyParser.json());
app.use(MaxEffortRoutes);
app.use(PyramidRoutes);
app.use(GripSwitchRoutes);
app.use(MaxDayRoutes);

// app.use(express.static('public'))

app.listen(3000, (err)=>{
    if (err) {
        return console.log("Error", err);
      }
})