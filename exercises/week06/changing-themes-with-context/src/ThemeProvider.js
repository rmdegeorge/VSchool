import React from 'react';
import {Provider, Consumer} from './index';

class ThemeProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      theme: 'dark'
    };
  };
  toggleTheme() {
    this.setState(prevState => ({
      theme: prevState.theme === 'dark' ? 'light' : 'dark'
    }));
  };
  render() {
    const props = {
      toggleTheme: this.toggleTheme,
      ...this.state
    };
    return (
      <Provider>
        {this.props.children}
      </Provider>
    );
  };
};
export default ThemeProvider;

export function withTheme(Comp) {
  return (
    props =>  <Consumer>
                {value => <Comp {...value}{...props} />}
              </Consumer>
  )
}