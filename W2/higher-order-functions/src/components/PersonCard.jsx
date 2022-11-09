import React from 'react'

const PersonCard = ({firstName,lastName,age,city}) => {

  return (
    <div className="border border-dark col-4 mx-auto p-4 m-3 bg-info text-warning">
        <h1>{firstName}</h1>
        <h2>{lastName}</h2>
        <h3>{age}</h3>
        <h4>{city}</h4>
  </div>
  )
}

export default PersonCard