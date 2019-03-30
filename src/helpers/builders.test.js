import { enzyme, shallow } from 'enzyme';
import React from 'react'

import { 
  peopleGatherer, 
  peopleCreator,
  planetsGatherer,
  planetsCreator,
  vehiclesGatherer,
  vehiclesCreator 
} from './builders';

import { fetchHappens } from './fetch';

describe('builders', () => {

  describe('peopleGatherer', () => {

    it('should return the correct data', async () => {

      let mockPerson = {
        birth_year: "19BBY",
        eye_color: "blue",
        films: [
          "https://swapi.co/api/films/2/",
          "https://swapi.co/api/films/6/",
          "https://swapi.co/api/films/3/",
          "https://swapi.co/api/films/1/",
          "https://swapi.co/api/films/7/"
        ],
        gender: "male",
        hair_color: "blond",
        height: "172",
        homeworld: "https://swapi.co/api/planets/1/",
        name: "Luke Skywalker",
        skin_color: "fair",
        species: ["https://swapi.co/api/species/1/"],
        starships: [
          "https://swapi.co/api/starships/12/",
          "https://swapi.co/api/starships/22/"
        ],
        vehicles: [
          "https://swapi.co/api/vehicles/14/",
          "https://swapi.co/api/vehicles/30/"
        ] 
      }

      const results = await peopleGatherer(mockPerson);
      const expected = {
        "category": "people",
        "homeworld": "Tatooine",
        "language": "Galactic Basic",
        "name": "Luke Skywalker",
        "population": "200000",
        "species": "Human",
      }
      expect(results).toEqual(expected);
    })

  })

  describe('planetsCreator', () => {

    let mockInfo = { 
      name: 'Earth',
      terrain: 'bumpy',
      population: 10000,
      climate: 'hot',
      residents: 3 
    };

    let wrapper = shallow( planetsCreator(mockInfo) );

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    }) 
    
  })

  describe('planetsGatherer', () => {

    it('should return the correct data', async () => {

      let mockPlanet = {
        climate: "temperate",
        created: "2014-12-10T11:35:48.479000Z",
        diameter: "12500",
        edited: "2014-12-20T20:58:18.420000Z",
        films: [
          "https://swapi.co/api/films/6/", 
          "https://swapi.co/api/films/1/"
          ],
        gravity: "1 standard",
        name: "Alderaan",
        orbital_period: "364",
        population: 2000000000,
        residents: [
          "https://swapi.co/api/people/5/", 
          "https://swapi.co/api/people/68/", 
          "https://swapi.co/api/people/81/"
          ],
        rotation_period: 24,
        surface_water: 40,
        terrain: "grasslands, mountains",
        url: "https://swapi.co/api/planets/2/" 
      }

      const results = await planetsGatherer(mockPlanet);
      const expected = {
        "category": "planets", 
        "climate": "temperate", 
        "name": "Alderaan", 
        "population": 2000000000, 
        "residents": 3, 
        "terrain": "grasslands, mountains"
      }
      expect(results).toEqual(expected);
    })

  })

  describe('vehiclesCreator', () => {

    let mockInfo = {
      model: "Digger Crawler",
      name: "Sand Crawler",
      passengers: "30",
      vehicleClass: "wheeled"
    }

    let wrapper = shallow( vehiclesCreator(mockInfo) );

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    }) 
    
  })
  
})