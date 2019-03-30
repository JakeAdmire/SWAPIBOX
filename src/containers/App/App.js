import React, { Component } from 'react';
import { connect } from 'react-redux';
import { chooseFilm } from '../../actions';
import { Route } from 'react-router-dom';

import { fetchHappens } from '../../helpers/fetch';
import { Crawl } from '../../components/Crawl/Crawl';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidMount() {
    fetchHappens('https://swapi.co/api/films/')
      .then(films => this.props.chooseFilm(films.results))
      .catch(Error => this.setState({error: Error.message}) )
  }

  render() {
    const { crawl, title, date } = this.props.film;
    const crawlContent = { crawl, title, date };
    return (
      <div className="App">
        <Header />
        <Crawl {...crawlContent}/>
        { this.props.category && <Main /> }
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  film: state.film,
  category: state.category
})

export const mapDispatchToProps = (dispatch) => ({
  chooseFilm: (films) => dispatch(chooseFilm(films))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);