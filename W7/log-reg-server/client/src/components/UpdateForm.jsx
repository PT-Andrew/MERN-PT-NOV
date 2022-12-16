import axios from 'axios'
import React, {useState,useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const UpdateForm = () => {
    const [title,setTitle] = useState('')
    const [director,setDirector] = useState('')
    const [rating,setRating] = useState('')
    const [genre,setGenre] = useState('')
    const [release,setRelease] = useState('')
    const [boxOffice,setBoxOffice] = useState('')
    const [kidFriendly,setKidFriendly] = useState('')
    const [boxArt,setBoxArt] = useState('')

    const [errors,setErrors] = useState({})

    const [movie,setMovie] = useState({})

    const {id} = useParams()

    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/oneMovie/${id}`)
        .then((res)=>{
            console.log(res)
            setTitle(res.data.title)
            setDirector(res.data.director)
            setBoxOffice(res.data.boxOffice)
            setRelease(res.data.releaseYear)
            setRating(res.data.rating)
            setGenre(res.data.genre)
            setRelease(res.data.releaseYear)
            setBoxArt(res.data.boxArt)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/updateMovie/${id}`,{
            title,
            director,
            rating,
            genre,
            release,
            boxOffice,
            boxArt
        })
        .then((res)=>{
            console.log(res)
            navigate('/movielist')
        }).catch((err)=>{
            console.log(err)
            setErrors(err.response.data.errors)
        })

    }


  return (
    <div className="col-6 mx-auto">
        <h1>Edit Movie Info</h1>
        <form onSubmit={submitHandler}>
            <label className="form-label">Title:</label>
            <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} />
            {errors.title && <span className="text-danger">{errors.title.message}</span>}<br></br>
            <label className="form-label">Director:</label>
            <input type="text" className="form-control" value={director} onChange={(e)=>setDirector(e.target.value)} />
            {errors.director && <span className="text-danger">{errors.director.message}</span>}<br></br>
            <label className="form-label">Rating:</label>
            <select className="form-control" value={rating} onChange={(e)=>setRating(e.target.value)}>
                <option>Select A Rating</option>
                <option value="G">G</option>
                <option value="PG">PG</option>
                <option value="PG-13">PG-13</option>
                <option value="R">R</option>
                <option value="NC-17">NC-17</option>
            </select>
            <label className="form-label">Genre:</label>
            <select type="text" className="form-control" value={genre} onChange={(e)=>setGenre(e.target.value)} >
                <option>Select a Genre</option>
                <option value="Comedy">Comedy</option>
                <option value="Drama">Drama</option>
                <option value="Horror">Horror</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Action">Action</option>
                <option value="Family">Family</option>
                <option value="Animated">Animated</option>
                <option value="Documentary">Documentary</option>
                <option value="Romcom">Romance</option>
                <option value="Silent Movie">Silent Movie</option>
                <option value="Thriller">Thriller</option>
                <option value="Crime Noir">Crime Noir</option>
                <option value="French Cinema">French Cinema</option>
                <option value="Horror/Comedy">Horror Comedy</option>
                <option value="Kung-Fu">Kung-Fu</option>
                <option value="Bollywood">Bollywood</option>
            </select>
            <label className="form-label">Release Year:</label>
            <input type="number" className="form-control" value={release} onChange={(e)=>setRelease(e.target.value)} />
            <label className="form-label">Box Office:</label>
            <input type="number" className="form-control" value={boxOffice} onChange={(e)=>setBoxOffice(e.target.value)} />
            <label className="form-label">Kid Friendly:</label>
            <input type="text" className="form-control" onChange={(e)=>setKidFriendly(e.target.value)} />
            <label className="form-label">Box Art:</label>
            <input type="text" className="form-control" value={boxArt} onChange={(e)=>setBoxArt(e.target.value)} />
            <button className="btn btn-info mt-3">Submit</button>
        </form>

    </div>
  )
}

export default UpdateForm