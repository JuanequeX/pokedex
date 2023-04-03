import React, { useState, useEffect} from 'react'

const PokemonList = ({ pokemon, setSelectedPokemon }) => {

  const handleSrc = () => {
    fetch(pokemon.url)
    .then((response) => response.json())
    .then((data)=> {
      setSelectedPokemon(data)
    })
  }

  return (
    <div className='push-container' onClick={() => handleSrc()}>
      <a className='pokemon-push'>{pokemon.name}</a>
    </div>
  )
}

export default PokemonList
