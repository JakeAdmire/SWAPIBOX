import React from 'react';
import { Link } from 'react-router-dom';

export function Button({button, passEvent}) {

  return (
    <Link to={'/' + button.toLowerCase()}>
      <button className={button.toLowerCase()} onClick={ passEvent }>{button}</button>
    </Link>
  )
}