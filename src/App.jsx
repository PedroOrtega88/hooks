
import React from 'react';
import useCustomHook from './hooks/useCustomHook';

function App() {
  const pokemonData = useCustomHook('https://pokeapi.co/api/v2/pokemon/1');
  const rickAndMortyData = useCustomHook('https://rickandmortyapi.com/api/character/1');

  return (
    <div>
      <h2>Personaje Pokemon</h2>
      {pokemonData && (
        <div>
          <p>{pokemonData.name}</p>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        </div>
      )}

      <h2>Personaje Rick and Morty</h2>
      {rickAndMortyData && (
        <div>
          <p>{rickAndMortyData.name}</p>
          <img src={rickAndMortyData.image} alt={rickAndMortyData.name} />
        </div>
      )}
    </div>
  );
}

export default App;
