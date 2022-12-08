const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/mytestdb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((res)=>{
    console.log('Successfully connected to db')
}).catch((err)=>{
    console.log('Something went wrong when connecting to db', err)
})