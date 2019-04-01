import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { fetchHappens } from '../../helpers/fetch';
import { Crawl } from '../../components/Crawl/Crawl';
import Header from '../../components/Header/Header';
import { Main } from '../../components/Main/Main';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      film: {},
      error: '',
      category: 'people',
      renderCards: false
    };
  }

  componentDidMount() {
    const randNum = Math.floor(Math.random() * 7 + 1);
    fetchHappens('https://swapi.co/api/films/' + randNum)
      .then(film => this.setState({film}))
      .catch(Error => this.setState({error: Error.message}) )
  }

  changeState = (state) => {
    this.setState(state)
  }

  render() {
    let crawlContent;
    if (this.state.film) {
      const { opening_crawl, title, release_date } = this.state.film;
      crawlContent = { opening_crawl, title, release_date };
    }
    return (
      <div className="App">
        <Header changeCategory={this.changeCategory} changeState={this.changeState}/>
        <Crawl {...crawlContent}/>
        <Route path='/:id' render={
          ({match}) => <Main  category={this.state.category} 
                              changeState={this.changeState}
                              renderCards={this.state.renderCards}/>}/>
      </div>
    );
  }
}