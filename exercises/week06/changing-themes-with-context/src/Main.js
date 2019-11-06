import React from 'react';
import {withTheme} from './ThemeProvider';

function Main({theme, toggleTheme}) {
  return (
    <div className={`${theme}-main Main`}>
      I'm the Main bit
      <button onClick={toggleTheme}>{theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}</button>
    </div>
  )
}

export default withTheme(Main);