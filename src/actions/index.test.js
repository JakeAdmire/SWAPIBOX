import { enzyme } from 'enzyme';
import { chooseFilm, addFavorite, setCategory } from './';

describe('chooseFilm', () => {

  it('should return an object with type of "CHOOSE_FILM"', () => {
    const films = [];
    const expected = { type: 'CHOOSE_FILM', films};
    const results = chooseFilm(films);
    expect(results).toEqual(expected);
  })

})

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