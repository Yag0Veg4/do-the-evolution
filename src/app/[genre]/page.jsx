import React from 'react'

function Genre({ params }) {
  return (
    <div>
        <h1>{params.genre}</h1>
    </div>
  )
}

export default Genre