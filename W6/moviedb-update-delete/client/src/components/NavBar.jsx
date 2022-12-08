import React from 'react'
import {Link,NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="bg-dark">
        <h1 className="text-warning">Movie DB</h1>
        <NavLink to="/movielist">Home</NavLink>
        <NavLink to="/form">Form</NavLink>

    </div>
  )
}

export default NavBar