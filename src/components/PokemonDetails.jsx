import React from 'react'

const PokemonDetails = ({setPokemon, pokemon}) => {
  const handleBack = () => {
    setPokemon({showDetails: false})
  }
  console.log(pokemon)
  return (
    <div className='skill'>
      <div className='skill__type'>
        <span>Type:</span>
        <div className='skill__type__types'>
          {pokemon.types?.map((type, key) => <p key={key}>✶ {type.type.name}</p>)}
        </div>
      </div>
      <div className='skill__trait'>
        <p>{`✨ Number: ${pokemon.id}`}</p>
        <p>{`✨ Name: ${pokemon.name}`}</p>
        <p>{`✨ Height: ${pokemon.height}`}</p>
        <p>{`✨ Weight: ${pokemon.weight}`}</p>
      </div>
      <p className='skill__stats-title'>stats 📊</p>
      <div className='skill__stats-container'>
        <div className='skill__stats-container__stats'>
          {pokemon.stats?.map((stat, key) => <p key={key}>{stat.stat.name}</p>)}
        </div>
        <div className='skill__stats-container__ranges-container'>
          {pokemon.stats?.map((stat, key) =>
            <div key={key} className='skill__stats-container__ranges-container__progress' >
              <div className='skill__stats-container__ranges-container__progress-bar' style={{width:`${stat.base_stat > 100 ? 100 : stat.base_stat}%`}} >
                <span className='skill__stats-container__ranges-container__progress-bar-text'>{stat.base_stat}%</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='skill__ability-container'>
        <h2>Abilities</h2>
        <div className='skill__type__types'>
          {pokemon.abilities?.map((ability, key) => <p key={key}>✶ {ability.ability.name}</p>)}
        </div>
      </div>
      <button onClick={() => handleBack()}>Back</button>
    </div>
  )
}

export default PokemonDetails
