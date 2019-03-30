import { enzyme } from 'enzyme';
import { categoryReducer } from '../categoryReducer';

describe('categoryReducer', () => {

  it('should return state by defualt', () => {
    const state = '';
    const action = {};
    expect(categoryReducer(state, action)).toEqual(state);
  })

})