import { enzyme, shallow } from 'enzyme';
import React from 'react';

import { Card, mapStateToProps } from './Card';
import * as builders from '../../helpers/builders';

describe('Card', () => {

  let wrapper;

  let mockProps = {
    faves: [],
    category: 'people'
  }

  wrapper = shallow(
    <Card {...mockProps} />
  )

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  }) 

})

describe('mapStateToProps', () => {

  it('should return a faves array and as props', () => {
    const mockState = {
      faves: []
    }

    const results = mapStateToProps(mockState)
    expect(results).toEqual(mockState)
  })

})