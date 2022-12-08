const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 8000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb://localhost/mytestdb',()=>{
    console.log('Connected to MongoDB!')
})

// Schema (Blueprint for data)

const UserSchema = mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    developer:Boolean
})

// Model

const User = mongoose.model('User',UserSchema)


app.post('/api/addUser',(req,res)=>{
    User.create(req.body)
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })
})

app.get('/api/getAllUsers',(req,res)=>{
    User.find()
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })
})


app.listen(PORT,()=>{
    console.log(`Server is up and running on port ${PORT}`)
})