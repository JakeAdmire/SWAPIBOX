import React from 'react';

export function Header(props) {
  let faves = `Faves(${props.faves})`;

  return (
    <div>
      <h1>Swapi-Box</h1>
      <div className="button-holder">
        <button>People</button>
        <button>Planets</button>
        <button>Vehicles</button>
        <button>{faves}</button>
      </div>
    </div>
  )
}