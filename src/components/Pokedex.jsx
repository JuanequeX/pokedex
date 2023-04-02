import React, { useState, useEffect } from 'react'
import PokemonImage from './PokemonImage'
import PokemonList from './PokemonList'

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState({})
  const SRC = selectedPokemon?.sprites?.front_default
  let URL = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20'

  useEffect(() => {
    fetch(`${URL}`)
    .then((response) => {
     return response.json()
    })
    .then((data) => {
      setPokemons(data.results)
    })
  },[])

  return (
    <div className='pokedex-container'>
      <div className='image-container'>
        <PokemonImage src={SRC} />
      </div>
      <div className='list-container'>
        { pokemons.map((pokemon, index) =>
          <PokemonList pokemon={pokemon} key={index}  setSelectedPokemon={setSelectedPokemon}/>
        )}
      </div>
    </div>
  )
}

export default Pokedex
