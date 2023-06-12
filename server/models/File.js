const mongoose = require('mongoose')

const Schema = mongoose.Schema
const fileSchema = new Schema({
    filename:{
        type: String,
        required: true
    },
    secure_url:{
        type: String,
        required: true
    },
    format:{
        type: String,
        required: true
    },
    sizeInBytes:{
        type: String,
        required: true
    },
    sender:{
        type: String,
    },
    receiver:{
        type: String,
    },
},{
    timestamps: true,
})

module.exports = mongoose.model("File", fileSchema)