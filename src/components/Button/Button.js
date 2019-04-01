import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

export function Button({button, passEvent}) {

  let buttonText = button.toLowerCase();

  return (
    <Link to={'/' + buttonText}>
      <button className={buttonText} onClick={ passEvent }>{button}</button>
    </Link>
  )
}

// Button.propTypes = {
//   button: PropTypes.string.isRequired,
//   passEvent: PropTypes.func.isRequired
// };