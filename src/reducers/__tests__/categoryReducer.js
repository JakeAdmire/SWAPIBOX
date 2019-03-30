import { enzyme } from 'enzyme';
import { categoryReducer } from '../categoryReducer';

describe('categoryReducer', () => {

  it('should return the action event', () => {
    const state = '';
    const event = 'people';
    const action = {
      type: 'SET_CATEGORY',
      event
    };
    const results = categoryReducer(state, action);
    expect(results).toEqual(event);
  })

  it('should return state by defualt', () => {
    const state = '';
    const action = {};
    const results = categoryReducer(state, action);
    expect(results).toEqual(state);
  })

})