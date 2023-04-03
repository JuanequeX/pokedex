import React, { useState, useEffect} from 'react'

const PokemonList = ({ pokemon, setPokemon }) => {
  const [pokemonData, setPokemonData] = useState()

  const handlePokemon = () => {
    if(!pokemonData)
    fetch(pokemon.url)
    .then((response) => response.json())
    .then((data)=> {
      setPokemon({showDetails: false, ...data})
      if (data) setPokemonData(data)
    })
  }

  const handleShowDetails = () => {
    setPokemon({showDetails: true, ...pokemonData})
  }

  return (
    <div className='push-container' onClick={() => handlePokemon()} onDoubleClick={handleShowDetails}>
      <a className='pokemon-push'>{pokemon.name}</a>
    </div>
  )
}

export default PokemonList
