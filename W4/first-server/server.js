// Node   npm (Node Package Manager)
// Express

// npm init -y
// npm i -g nodemon
// npm i express

const express = require('express')
const app = express()
const PORT = 8000

const {faker} = require('@faker-js/faker')

// Middleware

// take post data and add it into the body field of the request object
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const createUser = () => {
    return {
        _id:faker.datatype.uuid(),
        first_name:faker.name.firstName(),
        last_name:faker.name.lastName(),
        email:faker.internet.email(),
        password:faker.internet.password(),
        phone_number:faker.phone.number(),
    }
}

const createCompany = () => {
    return {
        _id:faker.datatype.uuid(),
        name:faker.name.fullName(),
        address:{
            street:faker.address.street(),
            city:faker.address.city(),
            state:faker.address.state(),
            zip:faker.address.zipCode(),
            country:faker.address.country
        }
    }
}

app.listen(PORT,()=>{
    console.log(`Server is up and running on port ${PORT}`)
})

app.get('/user',(req,res)=>{
    // console.log(req)
    // console.log(req.url,req.method)
    const user = createUser()
    users.push(user)
    console.log(users)
    res.json(users)
})

app.get('/getAllUsers',(req,res)=>{
    res.json(users)
})

const users = []

app.put('/updateUser/:id',(req,res)=>{
    const id = req.params.id
    const newArr = users.map((user)=>{
        if(user._id == id){
            user.first_name = "Changed it"
        }
        return user
    })
    res.json(newArr)
})

app.delete('/deleteUser/:id',(req,res)=>{
    const id = req.params.id
    const newArr = users.filter((user)=>{
        return user._id != id
    })
    res.json(newArr)
})

app.get('/addressURL',(req,res)=>{

})

app.get('/company',(req,res)=>{
    // const company = createCompany()
    res.json(company)
})

app.get('/word/:word',(req,res)=>{
    console.log(req)
    res.json(req.params.word)
})

app.post('/addUser',(req,res)=>{
    // console.log(req.body)
    // console.log(req)
    users.push(req.body)
    res.json(users)
})