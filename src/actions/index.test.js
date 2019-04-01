import { enzyme } from 'enzyme';
import { removeFavorite, addFavorite, setCategory } from './';

describe('addFavorite', () => {

  it('should return an object with type of "ADD_FAVORITE"', () => {
    const film = {};
    const expected = { type: 'ADD_FAVORITE', film};
    const results = addFavorite(film);
    expect(results).toEqual(expected);
  })

})

describe('setCategory', () => {

  it('should return an object with type of "SET_CATEGORY"', () => {
    const event = '';
    const expected = { type: 'SET_CATEGORY', event };
    const results = setCategory(event);
    expect(results).toEqual(expected);
  })
})

describe('removeFavorite', () => {

  it('should return an object with the type of "REMOVE_FAVORITE"', () => {
    const film = {};
    const expected = { type: 'REMOVE_FAVORITE', film };
    const results = removeFavorite(film);
    expect(results).toEqual(expected);
  })

})