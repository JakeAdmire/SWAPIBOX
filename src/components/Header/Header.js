import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setCategory } from '../../actions';
import { Button } from '../Button/Button';

export function Header(props) {
  let faves = `Faves(${props.faves.length})`;

  const passEvent = (e) => {
    const { innerText } = e.target;
    props.setCategory(innerText);
  }

  const generateButtons = () => {
    const buttons = ['People', 'Planets', 'Vehicles'];
    return buttons.map(button => 
      <Button key={button} button={button} passEvent={passEvent} />
    )
  }

  return (
    <div>
      <h1>Swapi-Box</h1>
      <div className="button-holder">
        { generateButtons() }
      </div>
    </div>
  )
}

export const mapStateToProps = (state) => ({
  faves: state.faves
})

export const mapDispatchToProps = (dispatch) => ({
  setCategory: (event) => dispatch(setCategory(event))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);