import React from 'react'
import { Link, useParams } from 'react-router-dom'

const About = ({state,setState}) => {

    const {num} = useParams()

  return (
    <div>
        <h1>About Component</h1>
        {/* <Link to="/home">Home</Link> */}
        <h3>The number is: {num}</h3>
        <h3>Person is: {state[num].name}</h3>
        <p>Age is: {state[num].age}</p>
        <p>Something Else: {state[num].somethingElse}</p>
    </div>
  )
}

export default About