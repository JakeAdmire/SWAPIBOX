import React, { Component } from 'react';

import { fetchHappens } from '../../helpers/fetch';
import { Crawl } from '../../components/Crawl/Crawl';
import { Header } from '../../components/Header/Header';

export class App extends Component {
  constructor() {
    super();
    this.state = { film: {} };
  }

  componentDidMount() {
    fetchHappens('https://swapi.co/api/films/')
      .then(films => this.chooseFilm(films))
      .catch(Error => this.setState({error: Error.message}) )
  }

  chooseFilm = (films) => {
    const randNum = Math.floor(Math.random() * Math.floor(7));
    let film = {
      crawl: films[randNum].opening_crawl,
      title: films[randNum].title,
      date: films[randNum].release_date,
      episode: films[randNum].episode_id
    }
    this.setState({film});
  }

  render() {
    const { crawl, title, date, episode } = this.state.film;
    const crawlContent = { crawl, title, date };
    console.log(crawl);
    return (
      <div className="App">
        <Header />
        <Crawl {...crawlContent}/>
      </div>
    );
  }
}

export default App;