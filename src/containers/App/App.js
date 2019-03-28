import React, { Component } from 'react';
import { connect } from 'react-redux';
import { chooseFilm } from '../../actions';

import { fetchHappens } from '../../helpers/fetch';
import { Crawl } from '../../components/Crawl/Crawl';
import { Header } from '../../components/Header/Header';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidMount() {
    fetchHappens('https://swapi.co/api/films/')
      .then(films => this.props.chooseFilm(films))
      .catch(Error => this.setState({error: Error.message}) )
  }

  render() {
    const { crawl, title, date, episode } = this.props.film;
    const crawlContent = { crawl, title, date };
    return (
      <div className="App">
        <Header faves={this.props.faves.length}/>
        <Crawl {...crawlContent}/>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  film: state.film,
  faves: state.faves
})

export const mapDispatchToProps = (dispatch) => ({
  chooseFilm: (films) => dispatch(chooseFilm(films))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);