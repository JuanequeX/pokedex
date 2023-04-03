import React, { useState, useEffect } from 'react'
import PokemonImage from './PokemonImage'
import PokemonList from './PokemonList'
import { useSearchParams } from 'react-router-dom';
import PokemonDetails from './PokemonDetails';

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([])
  const [pokemon, setPokemon] = useState({showDetails: false})
  // const [selectedPokemon, setSelectedPokemon] = useState({})
  const [currentPage, setCurrentPage] = useState(1)
  let [, setSearchParams] = useSearchParams();


  const SRC = pokemon?.sprites?.front_default
  const URL = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    setSearchParams({page: currentPage})
    fetch(`${URL}/?offset=${getOffSet()}&limit=${getLimit()}`)
    .then((response) => {
     return response.json()
    })
    .then((data) => {
      setSearchParams({page: currentPage})
      setPokemons(data.results)
    })
  },[currentPage])


  const getOffSet = () => {
    if (currentPage === 1) {
      return 0
    }
    return (currentPage - 1 ) * 20
  }

  const getLimit = () => {
    if (currentPage === 8) {
      return 10
    }
    return 20
  }


  const handlePreviousPage = () => {
    setCurrentPage(currentPage -1)
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  return (
    <div className='pokedex-container'>
      <div className='image-container'>
        <PokemonImage src={SRC} />
        {!pokemon.showDetails && (
          <div>
            { currentPage > 1 && ( <button onClick={() => handlePreviousPage()}>Previous</button> )}
            { currentPage < Math.ceil(150 / 20) && ( <button onClick={() => handleNextPage()}>Next</button> )}
          </div>
        )}
      </div>

      {
        !pokemon.showDetails && (
        <div className='list-container'>
          { pokemons.map((pokemon, index) =>
            <PokemonList pokemon={pokemon} key={index} setPokemon={setPokemon} />
          )}
        </div>
        )
      }
      {
        pokemon.showDetails && (
          <div>
            <PokemonDetails pokemon={pokemon} setPokemon={setPokemon}/>
          </div>
        )
      }
    </div>
  )
}

export default Pokedex
