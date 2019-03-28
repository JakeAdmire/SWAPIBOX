import React from 'react';

export function Header() {
  return (
    <div>
      <h1>Swapi-Box</h1>
      <div className="button-holder">
        <button>People</button>
        <button>Planets</button>
        <button>Vehicles</button>
      </div>
    </div>
  )
}