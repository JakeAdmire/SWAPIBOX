import { enzyme } from 'enzyme';
import { chooseFilm, addFavorite } from './';

describe('chooseFilm', () => {

  it('should return an object with type of "CHOOSE_FILM"', () => {
    const films = [];
    const expected = { type: 'CHOOSE_FILM', films};
    const results = chooseFilm(films);
    expect(results).toEqual(expected);
  })

})
