import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [title,setTitle] = useState('')
    const [director,setDirector] = useState('')
    const [rating,setRating] = useState('')
    const [genre,setGenre] = useState('')
    const [release,setRelease] = useState('')
    const [boxOffice,setBoxOffice] = useState('')
    const [kidFriendly,setKidFriendly] = useState('')
    const [boxArt,setBoxArt] = useState('')

 
    const [errors,setErrors] = useState({})

    const navigate = useNavigate()

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/createMovie',{
            title,
            director,
            rating,
            genre,
            release,
            boxOffice,
            boxArt
        }).then((res)=>{
            console.log(res)
            console.log("catch from back-end")
            // navigate('/movielist')

        }).catch((err)=>{
            console.log(err)
            console.log("error is caught on front-end")
            setErrors(err.response.data.errors)
        })
    }

  return (
    <div className="col-6 mx-auto">
        <h1>Create A Movie:</h1>
        <form onSubmit={submitHandler}>
            <label className="form-label">Title:</label>
            <input type="text" className="form-control" onChange={(e)=>setTitle(e.target.value)} />
            {/* one way of rendering the error */}
            {errors.title && <span className="text-danger">{errors.title.message}</span>}<br></br>
            <label className="form-label">Director:</label>
            <input type="text" className="form-control" onChange={(e)=>setDirector(e.target.value)} />
            {/* ternary operator version of error rendering */}
            {errors.director ? <span className="text-danger">{errors.director.message}</span> : null}<br></br>
            <label className="form-label">Rating:</label>
            <select className="form-control" onChange={(e)=>setRating(e.target.value)}>
                <option>Select A Rating</option>
                <option value="G">G</option>
                <option value="PG">PG</option>
                <option value="PG-13">PG-13</option>
                <option value="R">R</option>
                <option value="NC-17">NC-17</option>
            </select>
            <label className="form-label">Genre:</label>
            <select type="text" className="form-control" onChange={(e)=>setGenre(e.target.value)} >
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
            <input type="number" className="form-control" onChange={(e)=>setRelease(e.target.value)} />
            <label className="form-label">Box Office:</label>
            <input type="number" className="form-control" onChange={(e)=>setBoxOffice(e.target.value)} />
            <label className="form-label">Kid Friendly:</label>
            <input type="text" className="form-control" onChange={(e)=>setKidFriendly(e.target.value)} />
            <label className="form-label">Box Art:</label>
            <input type="text" className="form-control" onChange={(e)=>setBoxArt(e.target.value)} />
            <button className="btn btn-info mt-3">Submit</button>
        </form>
    </div>
  )
}

export default Form