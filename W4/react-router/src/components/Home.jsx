import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = ({state,setState}) => {

    const navigate = useNavigate()

    const num = 2489

    const navigateAbout = () => {
        navigate(`/about/${num}`)
    }

  return (
    <div>
        <h1>Home Component</h1>
        {/* <Link to="/about">About</Link> */}
        <button onClick={navigateAbout}>Navigate</button>
    </div>
  )
}

export default Home