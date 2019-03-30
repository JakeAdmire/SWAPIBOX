import { enzyme, shallow } from 'enzyme';
import React from 'react';

import { Main, mapStateToProps } from './Main';
import * as builders from '../../helpers/builders';

describe('Main', () => {

  let wrapper;
  let mockProps = {
    category: 'people'
  }
  let fetchHappens = jest.fn();

  wrapper = shallow(
    <Main {...mockProps}/>
  )

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  }) 

  it('should have default state', () => {
    expect(wrapper.state()).toEqual({ 
      cards: [],
      error: ''
    });
  })


  it.skip('should call fetchHappens when fetchData is invoked', () => {
    wrapper.instance().fetchData();
    expect(fetchHappens).toBeCalled();
  })

  it.skip('should change state when determineCards is invoked', () => {
    const mockResults = [{
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
    }]
    expect(wrapper.state('cards')).toEqual([]);
    wrapper.instance().determineCards(mockResults);
    expect(wrapper.state('cards')).toEqual(['']);

  })

})

describe('mapStateToProps', () => {

  it('should return a category string as props', () => {
    const mockState = {
      category: 'people'
    }

    const results = mapStateToProps(mockState)
    expect(results).toEqual(mockState)
  })

})