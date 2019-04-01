import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { addFavorite, removeFavorite } from '../../actions';
import * as builders from '../../helpers/builders';

export function Card(props) {

  let card = builders[`${props.category}Creator`](props);
  let fave = 'fave-button';

  if (props.faves.includes(props.name)) {
    console.log('active');
    fave = 'fave-button active';
  }

  const toggleFavorite = () => {
    if (props.faves.includes(props.name)) {
      props.removeFavorite(props.name)
    } else {
      props.addFavorite(props.name);
    }
    console.log('faves props:', props.faves);
  }

  return (
    <div>
      <button onClick={toggleFavorite} className={fave}>FAVE</button>
      { card }
    </div>
  )
}

// Card.propTypes = {
//   faves: PropTypes.array.isRequired,
//   addFavorite: PropTypes.func.isRequired,
//   removeFavorite: PropTypes.func.isRequired,
//   category: PropTypes.string.isRequired
// };

export const mapStateToProps = (state) => ({
  faves: state.faves
})

export const mapDispatchToProps = (dispatch) => ({
  addFavorite: (film) => dispatch(addFavorite(film)),
  removeFavorite: (film) => dispatch(removeFavorite(film))
})

export default connect(mapStateToProps, mapDispatchToProps)(Card);