import { enzyme, shallow } from 'enzyme';
import React from 'react'
import { Main, mapStateToProps } from './Main';

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