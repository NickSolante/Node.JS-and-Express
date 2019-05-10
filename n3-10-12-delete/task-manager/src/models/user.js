const mongoose = require('mongoose')


const User = mongoose.model('Users', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required:true,
        trim: true,
        lowercase: true
    },
    age: {
        type: Number,
        default:0
    },
    password: {
        type: String,
        required:true,
        trim:true,
        minLength: 8,
        max:24

    },
    tname: {
        type: String,
        required:true,
        trim:true,
        min: 8,
        max:24
    },favTeam: {
        type: String,
        required:true,
        trim:true
    }

})

module.exports = User