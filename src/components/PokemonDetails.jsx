import React from 'react'

const PokemonDetails = () => {
  const handleBack = () => {
    console.log("back")
  }
  
  return (
    <div>PokemonDetails
      <button onClick={() => handleBack()}>Back</button>
    </div>
  )
}

export default PokemonDetails
