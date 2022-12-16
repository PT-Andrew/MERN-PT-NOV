const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000
require('dotenv').config()
const cookieParser = require('cookie-parser')

// require the configuration file
require('./config/mongoose.config')

// middleware that adds post data to body of request
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// middleware that adds cookies to a request
app.use(cookieParser())


app.use(cors({
    origin: 'http://localhost:3000',credentials:true
  }))

// import routes
const Routes = require('./routes/movie.routes')
Routes(app)

const UserRoutes = require('./routes/user.routes')
UserRoutes(app)

app.listen(PORT,()=>{
    console.log(`Server is up and running on port ${PORT}`)
})