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

export const planetsGatherer = (planet) => {
  return {
    name: planet.name, 
    terrain: planet.terrain,
    population: planet.population,
    climate: planet.climate,
    residents: planet.residents.length,
    category: 'planets'
  };
}

export const planetsCreator = (info) => {
  const { name, terrain, population, climate, residents } = info;
  return (
    <div className="planet card">
      <h3>Name: {name}</h3>
      <p>Terrain: {terrain}</p>
      <p>Population: {population}</p>
      <p>Climate: {climate}</p>
      <p>Residents: {residents}</p>
    </div>
  )
}

export const vehiclesGatherer = (vehicle) => {
  return {
    name: vehicle.name,
    model: vehicle.model,
    vehicleClass: vehicle.vehicle_class,
    passengers: vehicle.passengers,
    category: 'vehicles'
  };
}

export const vehiclesCreator = (info) => {
  const { name, model, vehicleClass, passengers } = info;
  return (
    <div className="planet card">
      <h3>Name: {name}</h3>
      <p>Model: {model}</p>
      <p>Class: {vehicleClass}</p>
      <p>Passengers: {passengers}</p>
    </div>
  )
}