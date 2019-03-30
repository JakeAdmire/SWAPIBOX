import { enzyme, shallow } from 'enzyme';
import React from 'react'

import { peopleGatherer, peopleCreator } from './builders';
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

  describe('peopleCreator', () => {

    let mockInfo = { 
      name: 'Bob',
      species: 'human',
      homeworld: 'Earth',
      population: 100000 
    };

    let wrapper = shallow( peopleCreator(mockInfo) );

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    }) 
    
  })
  
})