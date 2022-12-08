const express = require('express')
const app = express()
const PORT = 8000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

require('./config/mongoose.config')

const UserRoutes = require('./routes/user.routes')
UserRoutes(app)

app.listen(PORT,()=>{
    console.log(`Server is up and running on port ${PORT}`)
})