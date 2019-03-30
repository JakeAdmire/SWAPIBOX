import { enzyme, shallow } from 'enzyme';
import React from 'react'

import { Header, mapStateToProps, mapDispatchToProps } from './Header';
import { setCategory } from '../../actions';

describe('Header', () => {

  let wrapper;

  wrapper = shallow(
    <Header faves={0} />
  )

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  }) 

})

describe('mapStateToProps', () => {

  it('should return a faves array as props', () => {
    const mockState = {
      faves: []
    }

    const results = mapStateToProps(mockState)
    expect(results).toEqual(mockState)
  })

})

describe('mapDispatchToProps', () => {

  it('should provide a method to dispatch an action creator', () => {
    const mockCategory = 'people';
    const mockDispatch = jest.fn();
    const actionToDispatch = setCategory(mockCategory);
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.setCategory(mockCategory);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  })

})