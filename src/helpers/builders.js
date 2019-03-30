import React from 'react';
import { fetchHappens } from './fetch';

export const peopleGatherer = async (person) => {
  const homeworld = await fetchHappens(person.homeworld);
  const species = await fetchHappens(person.species);

  return {
    name: person.name, 
    homeworld: homeworld.name,
    species: species.name,
    language: species.language,
    population: homeworld.population,
    category: 'people'
  };
}

export const peopleCreator = (info) => {
  const { name, homeworld, species, population } = info;
  return (
    <div className="person card">
      <h3>Name: {name}</h3>
      <p>Species: {species}</p>
      <p>Homeworld: {homeworld}</p>
      <p>Planet population: {population}</p>
    </div>
  )
}