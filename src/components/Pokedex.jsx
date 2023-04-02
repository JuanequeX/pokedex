import React, { useState, useEffect } from 'react'
import PokemonImage from './PokemonImage'
import PokemonList from './PokemonList'

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([])

  let URL = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20'

  useEffect(() => {
    fetch(`${URL}`)
    .then((response) => {
     return response.json()
    })
    .then((data) => {
      console.log(data.results)
      setPokemons(data.results)
    })
  },[])
  // debugger
  return (
    <div className='pokedex-container'>
      <PokemonImage />
      <div className='list-container'>
        { pokemons.map((pokemon, index) =>
          <PokemonList pokemon={pokemon} key={index} />
        )}
      </div>
    </div>
  )
}

export default Pokedex
