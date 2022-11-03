import React from 'react'

const Comp1 = (props) => {
    const {message,setState} = props

  return (
    <div className="border border-dark col-6 mx-auto">
        <h2>Comp1 Component</h2>
        <p>{message}</p>
        <button onClick={()=>setState('different message')}>Change Message</button>
    </div>
  )
}

export default Comp1