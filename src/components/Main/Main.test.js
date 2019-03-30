import { enzyme, shallow } from 'enzyme';
import React from 'react'
import { Main, mapStateToProps } from './Main';

describe('Main', () => {

  let wrapper;
  let mockProps = {
    category: 'people'
  }

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