import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'

const OneMovie = ({socket}) => {

    const [movie,setMovie] = useState({})

    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/onemovie/${id}`)
        .then((res)=>{
            setMovie(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    const deleteHandler = () => {
        socket.emit('deleteMovie',id)
        navigate('/movielist')
        
        // axios.delete(`http://localhost:8000/api/deleteMovie/${id}`)
        // .then((res)=>{
        // }).catch((err)=>{
        //     console.log(err)
        // })
    }

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.boxArt} className="col col-3 mx-auto" />
      <p>Director: {movie.director}</p>
      <p>Rating: {movie.rating}</p>
      <p>Genre: {movie.genre}</p>
      <Link to={`/editmovie/${movie._id}`}>Edit Movie</Link>
      <button className="btn btn-danger" onClick={deleteHandler}>Delete Movie</button>
    </div>
  )
}

export default OneMovie