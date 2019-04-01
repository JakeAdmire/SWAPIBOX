import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHappens } from '../../helpers/fetch';
import * as builders from '../../helpers/builders';

import Card from '../Card/Card';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      cards: [],
      error: '' 
    }
  }

  test = async () => {
    let data = await this.fetchData();
    data.results && this.determineCards(data.results);
    data.message && this.setState({error: data.message});
  }

  fetchData = async () => {
    const { category } = this.props;
    const url = (`https://swapi.co/api/${category.toLowerCase()}/`)
    const results = await fetchHappens(url)
    return results
  }

  determineCards = async (results) => {
    const cat = this.props.category.toLowerCase();
    const cardArray = await Promise.all(
      results.map(result => builders[`${cat}Gatherer`](result))
    )
    this.setState({cards: cardArray});
    this.props.changeState({renderCards: false});
  }

  render() {
    const { cards, error } = this.state;
    this.props.renderCards && this.test();
    return (
      <div>
        {
          this.props.renderCards ?
            error ? <p>{error}</p> : <p>Loading...</p> :
            cards.map(card => <Card key={card.name} {...card}/>)
        }
      </div>
    )
  }
}