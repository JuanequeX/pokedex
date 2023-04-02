import React, { useState, useEffect} from 'react'

const PokemonList = ({ pokemon }) => {
  // const [pokemons, setPokemons] = useState([])

  return (
    <div>
      <a>{pokemon.name}</a>
    </div>
  )
}

export default PokemonList
