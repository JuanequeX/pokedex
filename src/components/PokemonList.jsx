import React, { useState, useEffect} from 'react'

const PokemonList = ({ pokemon, setSelectedPokemon }) => {
  // const [pokemons, setPokemons] = useState([])

  const handleSrc = () => {
    fetch(pokemon.url)
    .then((response) => response.json())
    .then((data)=> {
      setSelectedPokemon(data)
    })
  }

  return (
    <div onClick={() => handleSrc()}>
      <a>{pokemon.name}</a>
    </div>
  )
}

export default PokemonList
