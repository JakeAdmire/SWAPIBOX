import { enzyme, shallow } from 'enzyme';
import React from 'react'
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { chooseFilm } from '../../actions';

describe('App', () => {

  let wrapper;

  let mockProps = {
    film: {
      crawl: 'Once upon a time', 
      title: 'Movie1', 
      date: '3-28-2019'
    },
    faves: [],
  };

  wrapper = shallow(
    <App {...mockProps}/>
  )

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  }) 

})

describe('mapStateToProps', () => {

  it('should return a film object and faves array as props', () => {
    const mockState = {
      film: {},
      faves: []
    }

    const results = mapStateToProps(mockState)
    expect(results).toEqual(mockState)
  })

})

describe('mapDispatchToProps', () => {

  it('should provide a method to dispatch an action creator', () => {
    const mockFilms = [{}, {}];
    const mockDispatch = jest.fn();
    const actionToDispatch = chooseFilm(mockFilms);
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.chooseFilm(mockFilms);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  })

})