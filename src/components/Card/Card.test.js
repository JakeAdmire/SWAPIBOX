import { enzyme, shallow } from 'enzyme';
import React from 'react';

import { Card } from './Card';
import * as builders from '../../helpers/builders';

describe('Card', () => {

  let wrapper;

  let mockProps = {
    faves: [],
    category: 'people'
  }

  wrapper = shallow(
    <Card {...mockProps} />
  )

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  }) 

})