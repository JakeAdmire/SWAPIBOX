import { enzyme, shallow } from 'enzyme';
import React from 'react';

import { Card, mapStateToProps, mapDispatchToProps } from './Card';
import { addFavorite, removeFavorite } from '../../actions';
import * as builders from '../../helpers/builders';

describe('Card', () => {

  let wrapper;

  let addFavorite = jest.fn();
  let removeFavorite = jest.fn();

  let mockProps = {
    faves: [],
    addFavorite,
    removeFavorite,
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

describe('mapDispatchToProps', () => {

  const mockFilm = {};
  const mockDispatch = jest.fn();

  it('should dispatch the addFavorite method', () => {
    const actionToDispatch = addFavorite(mockFilm);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addFavorite(mockFilm);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  })

  it('should dispatch the removeFavorite method', () => {
    const actionToDispatch = removeFavorite(mockFilm);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.removeFavorite(mockFilm);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  })

})