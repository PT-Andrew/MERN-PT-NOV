import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="bg-info p-2">
        <h2>Navbar</h2>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
    </div>
  )
}

export default Nav