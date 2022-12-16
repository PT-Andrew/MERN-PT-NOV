import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const MovieList = () => {

    const [list,setList] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/getAllMovies')
        .then((res)=>{
            console.log(res)
            setList(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

  return (
    <div className='d-flex flex-wrap mt-5'>
        {
            list.map((movie)=>(
                <div>
                    <Link to={`/onemovie/${movie._id}`} className="d-block">{movie.title}</Link>
                    <img src={movie.boxArt} className="col col-5" />
                </div>
            ))
        }
    </div>
  )
}

export default MovieList