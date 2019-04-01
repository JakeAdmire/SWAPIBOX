import React from 'react';

import { Button } from './Button';

describe('Button', () => {

  it('should match the snapshot', () => {
    let button = 'People';
    let passEvent = jest.fn();
    let wrapper = (
      <Button   button={button}
                passEvent={passEvent}/>
    )
    expect(wrapper).toMatchSnapshot();
  })

})