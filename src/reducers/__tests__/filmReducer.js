import { enzyme } from 'enzyme';
import { filmReducer } from '../filmReducer';

describe('chooseFilm', () => {

  it('should choose a random film from the array', () => {
    const films = [ {}, {}, {}, {}, {}, {}, {} ];
    const state = {};
    const action = {type: 'CHOOSE_FILM', films};

    const expected = {};
    const results = filmReducer(state, action);

    expect(results).toEqual(expected);
  })

  it('should return state by defualt', () => {
    const state = {};
    const action = {};
    expect(filmReducer(state, action)).toEqual(state);
  })

})