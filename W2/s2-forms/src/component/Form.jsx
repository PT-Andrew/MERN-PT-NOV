import React, {useState} from 'react'

const Form = () => {

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [age,setAge] = useState('')
    const [city,setCity] = useState('')

    const obj = {
        firstName,
        lastName,
        age,
        city
    }

    const submitHandler = (e) => {
        // make sure the page doesn't refresh
        e.preventDefault()
        if(firstName && lastName && age && city){
            // sending the data
            console.log(obj)
        }else{
            console.log('Missing fields!')
        }
    }

  return (
    <div>
        <form className="form col-4 mx-auto" onSubmit={submitHandler}>
            <label className="form-label">First Name: </label>
            <input type="text" className="form-control" onChange={(e)=>setFirstName(e.target.value)} />
            {
                // ternary operator
                firstName && firstName.length < 3 ? <p className="text-danger">First Name must be at least 3 characters!</p> : null
            }
            <label className="form-label">Last Name: </label>
            <input type="text" className="form-control" onChange={(e)=> setLastName(e.target.value)} />
            {
                // ternary operator
                lastName && lastName.length < 3 ? <p className="text-danger">Last Name must be at least 3 characters!</p> : null
            }
            <label className="form-label">Age: </label>
            <input type="number" className="form-control" onChange={(e)=> setAge(e.target.value)} />
            <label className="form-label">City: </label>
            <input type="text" className="form-control" onChange={(e)=> setCity(e.target.value)} />
            <button className="btn btn-primary mt-3">Submit Data</button>
        </form>
    </div>
  )
}

export default Form