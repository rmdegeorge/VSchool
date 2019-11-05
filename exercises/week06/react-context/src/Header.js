import React from 'react';
import {withTheme} from './ThemeProvider';


const Header = ({theme,toggleTheme}) => {
  return (
    <div className={`${theme}-header`}>
      <h1>My Super Sick Header</h1>
      <button onClick={toggleTheme}>{theme === "dark" ? "Switch to Light" : "Switch to Dark"}</button>
    </div>
  )
}

export default withTheme(Header);
