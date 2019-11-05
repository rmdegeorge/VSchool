import React from 'react';
import {withToggler} from './Toggler';

function Menu({on,toggle}) {
  return (
    <div>
      <button onClick={toggle}>Menu</button>
      <nav className={on ? "show" : "hide"}>
        <h6>Signed in as Coder123</h6>
        <a href="">Your Profile</a>
        <a href="">Your Repositories</a>
        <a href="">Your Stars</a>
        <a href="">Your Gists</a>
      </nav>
    </div>
  )
}

export default withToggler(Menu);