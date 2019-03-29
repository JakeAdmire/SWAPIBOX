import { enzyme, shallow } from 'enzyme';
import React from 'react'
import { Main } from './Main';

describe('Main', () => {

  let wrapper;

  wrapper = shallow(
    <Main />
  )

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  }) 

})