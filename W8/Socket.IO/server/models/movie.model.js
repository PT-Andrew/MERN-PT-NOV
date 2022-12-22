const mongoose = require('mongoose')

const MovieSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title is required!"],
        minLength:[3,"Title must be longer than 3 characters!"]
    },
    director:{
        type:String,
        required:[true,"Director is required!"]
    },
    rating:{
        type:String,
        required:[true,"Rating is required!"],
        enum: ['G','PG','PG-13','R','NC-17']
    },
    genre:{
        type:String,
        required:[true,"Genre is required!"],
        enum: [
            'Comedy',
            'Drama',
            'Horror',
            'Sci-Fi',
            'Fantasy',
            'Action',
            'Family',
            'Animated',
            'Documentary',
            'Romcom',
            'Silent Movie',
            'Thriller',
            'Crime Noir',
            'French Cinema',
            'Horror/Comedy',
            'Kung-Fu',
            'Bollywood'
          ],
    },
    releaseYear:{
        type:Number
    },
    boxOffice:{
        type:Number,
    },
    // kidFriendly:{
    //     type:Boolean
    // },
    boxArt:{
        type:String
    }
},{timestamps:true})

const Movie = mongoose.model('Movie',MovieSchema)

module.exports = Movie