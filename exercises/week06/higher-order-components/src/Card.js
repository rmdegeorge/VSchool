import React from 'react';
import { withToggler } from './Toggler';


function Card({on,toggle}) {
  return (
    <div>
      <h3>My Sweet Repo</h3>
      <p>My Sweet Description</p>
      <button onClick={toggle}>{on ? "Unstar" : "Star"}</button>
    </div>
  )
}

export default withToggler(Card)