import React from 'react'
import PokemonImage from './PokemonImage'
import PokemonList from './PokemonList'
import '../App.css';

const Pokedex = () => {
  return (
    <div className='pokedex-container'>
      <PokemonImage />
      <PokemonList />
    </div>
  )
}

export default Pokedex
