import React, {useState} from 'react'
import { nanoid } from 'nanoid'


const Form = ({list,setList}) => {

    const [name,setName] = useState('')
    const [city,setCity] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        const newUser = {
            id:nanoid(),
            name,
            city
        }
        setList([...list,newUser])
    }

    // CRUD OPERATIONS

  return (
    <div className="border border-success p-5 bg-info">
        <form className="form" onSubmit={submitHandler}>
            <label className="form-label">Name:</label>
            <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} />
            <label className="form-label">City:</label>
            <input type="text" className="form-control" onChange={(e)=>setCity(e.target.value)} />
            <button className="btn btn-info mt-3">Add User</button>
        </form>
    </div>
  )
}

export default Form