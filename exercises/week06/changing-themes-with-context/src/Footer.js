import React from 'react';
import {withTheme} from './ThemeProvider';

function Footer({theme}) {
  return (
    <div className={`${theme}-footer Footer`}>
      I'm The Footer!
    </div>
  )
}

export default withTheme(Footer);