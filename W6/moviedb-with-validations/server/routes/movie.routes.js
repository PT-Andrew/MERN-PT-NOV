// import controller functions
const MovieController = require('../controllers/movie.controllers')

module.exports = (app) => {
    // create a movie
    app.post('/api/createMovie',MovieController.createMovie)
    // get all movies
    app.get('/api/getAllMovies',MovieController.getAllMovies)
    // get one movie
    app.get('/api/oneMovie/:id',MovieController.getOneMovie)
    // update one movie
    app.put('/api/updateMovie/:id',MovieController.updateMovie)
    // delete one movie
    app.delete('/api/deleteMovie/:id',MovieController.deleteMovie)
}