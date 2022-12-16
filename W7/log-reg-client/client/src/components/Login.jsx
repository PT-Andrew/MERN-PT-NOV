import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/login',{
            email,
            password
        },{withCredentials:true,credentials:'include'})
        .then((res)=>{
            navigate('/movielist')
        }).catch((err)=>{
            console.log(err)
        })
    }

  return (
    <div>
        <form className="col-6 mx-auto" onSubmit={submitHandler}>
            <label className="form-label">Email:</label>
            <input type="text" className="form-control" onChange={(e)=>setEmail(e.target.value)} />
            <label className="form-label">Password:</label>
            <input type="text" className="form-control" onChange={(e)=>setPassword(e.target.value)} />
            <button className="btn btn-info mt-3">Login</button>
        </form>
    </div>
  )
}

export default Login