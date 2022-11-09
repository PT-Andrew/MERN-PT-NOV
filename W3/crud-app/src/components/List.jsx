import React,{useState} from 'react'

const List = ({list,setList}) => {

    const [name,setName] = useState('')

    const updateUser = (id) => {
        
        const updatedArr = list.map((user,index)=>{
            if(index === id){
                user.name = name
            }
            return user
        })
        console.log(updatedArr)
        setList(updatedArr)
    }

    const deleteItem = (id) => {
        // filter out unwanted item, creating a new array
        const userDeleted = list.filter((user)=>{
            return user.id !== id
        })
        // set new array into state
        setList(userDeleted)
    }

  return (
    <div className="border border-danger col-5 mx-auto bg-success">
        <h1>List:</h1>
        {
            list.map((user,index)=>(
                <div className="border border-dark col-4 mx-auto bg-light">
                    <h1>{user.id}</h1>
                    <h2>{user.name}</h2>
                    <h3>{user.city}</h3>
                    <input type="text" onChange={(e)=>setName(e.target.value)} /> 
                    <button className="btn btn-success" onClick={()=>updateUser(index)}>Update</button>
                    <button className="btn btn-danger" onClick={()=>deleteItem(user.id)}>Delete Item</button>
                </div>
            ))
        }
    </div>
  )
}

export default List