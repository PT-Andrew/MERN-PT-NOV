const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
},{timestamps:true})

UserSchema.pre('save', async function(next){
    try{
        const hashedPassword = await bcrypt.hash(this.password,10)
        console.log('Hashed Password:',hashedPassword)
        this.password = hashedPassword
        next()
    }catch{
        console.log('Error in save',error)
    }
})


module.exports = mongoose.model('User', UserSchema)


// Bcrypt -- hashes/encrypts passwords

// JSON Web Tokens

// Cookie-Parser

// dotenv
