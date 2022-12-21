import React,{useContext} from 'react'
import { firstContext } from './FirstContext'

const Comp1 = () => {

    const {state,setState} = useContext(firstContext)

  return (
    <div>
        <h1>Comp1: {state}</h1>
    </div>
  )
}

export default Comp1