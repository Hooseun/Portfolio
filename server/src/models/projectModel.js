const mongoose = require('mongoose')

const Schema = mongoose.Schema

const projectSchema = new Schema({
    proj_name: {
        type: String,
        required: true
    },
    proj_desc: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    lang: {
        type: Array,
        required: true
    }
    
}, {timestamps: true})

module.exports = mongoose.model('Project', projectSchema)
