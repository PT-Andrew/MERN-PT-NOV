import React,{useEffect, useState} from 'react'
import axios from 'axios'

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
    <div>
        {
            list.map((movie)=>(
                <div>
                    <h2>{movie.title}</h2>
                    <img src={movie.boxArt} />
                </div>
            ))
        }
    </div>
  )
}

export default MovieList