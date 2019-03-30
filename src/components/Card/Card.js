import React from 'react';
import { connect } from 'react-redux';
import * as builders from '../../helpers/builders';

export function Card(props) {

  let card = builders[`${props.category}Creator`](props);
  let fave = 'fave-button';

  if (props.faves.includes(props.name)) {
    console.log('favorite');
  }

  return (
    <div>
      <button className={fave}>FAVE</button>
      { card }
    </div>
  )
}

export const mapStateToProps = (state) => ({
  faves: state.faves
})

export default connect(mapStateToProps, null)(Card);