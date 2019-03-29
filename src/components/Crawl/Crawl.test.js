import { enzyme, shallow } from 'enzyme';
import React from 'react'
import { Crawl } from './Crawl';

describe('Crawl', () => {

  let wrapper;

  let crawlContent = {
    crawl: 'Once upon a time', 
    title: 'Movie1', 
    date: '3-28-2019'
  }

  wrapper = shallow(
    <Crawl {...crawlContent} />
  )

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  }) 

})