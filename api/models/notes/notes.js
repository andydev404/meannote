const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const noteSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
});

const noteModel = mongoose.model("Notes",noteSchema);

module.exports = {noteModel};