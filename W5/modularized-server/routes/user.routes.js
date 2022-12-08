// import controller functions
const UserController = require('../controllers/user.controllers')

module.exports = (app) => {
    app.get('/api/getAllUsers', UserController.getAllUsers)
    app.post('/api/addUser', UserController.addUser)   
}