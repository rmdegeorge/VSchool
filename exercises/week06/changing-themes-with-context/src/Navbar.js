import React from 'react';
import {withTheme} from './ThemeProvider';

function Navbar({theme}) {
  return (
    <div className={`${theme}-nav Navbar`}>
      I'm the navbar!
    </div>
  )
}

export default withTheme(Navbar);