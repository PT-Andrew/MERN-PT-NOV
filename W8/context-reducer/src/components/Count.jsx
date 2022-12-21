import React,{useState, useContext} from 'react'
import { firstContext } from './FirstContext'

const Count = ({state,dispatch}) => {

  const [num,setNum] = useState(0)

  return (
    <div>
        <h1>Counter:{state.count}</h1>
        <button onClick={(e)=>dispatch({type:'increment'})}>Increment</button>
        <button onClick={(e)=>dispatch({type:'decrement'})}>Decrement</button>
        <button onClick={(e)=>dispatch({type:'double'})}>Double</button>
        <input type="number" onChange={(e)=>setNum(e.target.value)} />
        <button onClick={(e)=>dispatch({type:'addNum',payload:num})}>Increase By Number</button>
    </div>
  )
}

export default Count