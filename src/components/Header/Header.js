import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Button } from '../Button/Button';

export class Header extends Component {
  constructor(props) {
    super(props);
  }

  passEvent = (e) => {
    const { innerText } = e.target;
    this.props.changeState({category: innerText.toLowerCase()});
    this.props.changeState({renderCards: true});
  }

  generateButtons = () => {
    const buttons = ['People', 'Planets', 'Vehicles'];
    return buttons.map(button => 
      <Button key={button} button={button} passEvent={this.passEvent} />
    )
  }

  render() { 
    let faves = `Faves(${this.props.faves.length})`;
    return (
      <div>
        <h1>Swapi-Box</h1>
        <div className="button-holder">
          { this.generateButtons() }
          <button>{faves}</button>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  faves: state.faves
})

export default connect(mapStateToProps, null)(Header);