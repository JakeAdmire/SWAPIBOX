import { enzyme, shallow } from 'enzyme';
import React from 'react'
import { Header } from './Header';

describe('Header', () => {

  let wrapper;

  wrapper = shallow(
    <Header faves={0} />
  )

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  }) 

})