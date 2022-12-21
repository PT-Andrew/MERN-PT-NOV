import React,{useContext} from 'react'
import { firstContext } from './FirstContext'

const Comp2 = () => {

    const {state} = useContext(firstContext)

  return (
    <div>
        <h1>Comp2: {state}</h1>
    </div>
  )
}

export default Comp2