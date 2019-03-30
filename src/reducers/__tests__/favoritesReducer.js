import { enzyme } from 'enzyme';
import { favoritesReducer } from '../favoritesReducer';

describe('chooseFilm', () => {

  it('should return state by default', () => {
    const state = [];
    const action = {};
    expect(favoritesReducer(state, action)).toEqual(state);
  })

})