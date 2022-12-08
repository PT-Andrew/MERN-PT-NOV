const mongoose = require('mongoose')

// Schema (Blueprint for data)

const UserSchema = mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    developer:Boolean
})

// Model

const User = mongoose.model('User',UserSchema)

module.exports = User
