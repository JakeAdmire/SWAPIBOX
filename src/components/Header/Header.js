import React from 'react';
import { connect } from 'react-redux';
import { setCategory } from '../../actions';

export function Header(props) {
  let faves = `Faves(${props.faves.length})`;

  const passEvent = (e) => {
    const { innerText } = e.target;
    props.setCategory(innerText);
  }

  return (
    <div>
      <h1>Swapi-Box</h1>
      <div className="button-holder">
        <button className="people" onClick={ passEvent }>People</button>
        <button className="planets" onClick={ passEvent }>Planets</button>
        <button className="vehicles" onClick={ passEvent }>Vehicles</button>
        <button>{faves}</button>
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