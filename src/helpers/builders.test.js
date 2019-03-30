import { enzyme, shallow } from 'enzyme';
import React from 'react'

import { peopleGatherer, peopleCreator } from './builders';
import { fetchHappens } from './fetch';

describe('builders', () => {

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