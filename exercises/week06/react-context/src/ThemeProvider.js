import React from 'react';
import {Provider,Consumer} from './index';

export default class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "dark"
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }
  toggleTheme() {
    this.setState(prevState => ({
      theme: prevState.theme === "dark" ? "light" : "dark"
    }))
  }
  render() {
    const props = {
      toggleTheme: this.toggleTheme, 
      ...this.state
    }
    return (
      // return the theme Provider and it's children
      <Provider value={props}>
        {this.props.children}
      </Provider>
    )
  }
}

export function withTheme(Comp){
  return(
    props =>  <Consumer>
                {value => <Comp {...value}{...props}/>}
              </Consumer>
  )
}