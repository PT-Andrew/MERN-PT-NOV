import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Register = () => {

    const [username,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/register',{
            username,
            email,
            password,
            confirmPassword
        },{withCredentials:true,credentials:'include'})
        .then((res)=>{
            console.log(res)
            navigate('/movielist')
        }).catch((err)=>{
            console.log(err)
        })
    }

  return (
    <div>
        <form className="col-6 mx-auto" onSubmit={submitHandler}>
            <label className="form-label">Username:</label>
            <input className="form-control" type="text" onChange={(e)=>setUserName(e.target.value)} />
            <label className="form-label">Email:</label>
            <input className="form-control" type="text" onChange={(e)=>setEmail(e.target.value)} />
            <label className="form-label">Password:</label>
            <input className="form-control" type="text" onChange={(e)=>setPassword(e.target.value)} />
            <label className="form-label">Confirm Password:</label>
            <input className="form-control" type="text" onChange={(e)=>setConfirmPassword(e.target.value)} />
            <button className="btn btn-info mt-3">Register</button>
        </form>
    </div>
  )
}

export default Register