const User = require('../models/user.model')

const addUser = (req,res)=>{
    User.create(req.body)
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })
}

const getAllUsers = (req,res)=>{
    User.find()
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = {
    addUser,
    getAllUsers
}

