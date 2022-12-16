// import controller functions
const MovieController = require('../controllers/movie.controllers')
const {authenticate} = require('../config/jwt.config')


module.exports = (app) => {
    // create a movie
    app.post('/api/createMovie', authenticate, MovieController.createMovie)
    // get all movies
    app.get('/api/getAllMovies',authenticate, MovieController.getAllMovies)
    // get one movie
    app.get('/api/oneMovie/:id', authenticate, MovieController.getOneMovie)
    // update one movie
    app.put('/api/updateMovie/:id', authenticate, MovieController.updateMovie)
    // delete one movie
    app.delete('/api/deleteMovie/:id', authenticate, MovieController.deleteMovie)
}