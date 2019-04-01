import React from 'react';
import { Link } from 'react-router-dom';

export function Button({button, passEvent}) {

  let buttonText = button.toLowerCase();

  return (
    <Link to={'/' + buttonText}>
      <button className={buttonText} onClick={ passEvent }>{button}</button>
    </Link>
  )
}