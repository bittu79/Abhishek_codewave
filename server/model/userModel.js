const mongoose = require("mongoose");


var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }
})


const dbModel = mongoose.model("student",schema);


module.exports = dbModel;