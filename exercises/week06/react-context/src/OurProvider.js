import React from 'react';
const {Provider, Consumer} = React.createContext();

class OurProvider extends React.Component {
  constructor() {
    super()
    this.state = {
      title: "I'm a Title",
      name: "Rob",
      on: false
    }
  }
  toggle = () => {
    this.setState(prev => {
      return {
        on: !prev.on
      }
    })
  }
  render() {
    return(
      <Provider value={{
        ...this.state,
        toggle: this.toggle
      }}>
        {this.props.children}
      </Provider>
    )
  }
}
export default OurProvider


export function withProvider(Comp) {
  return (props) => <Consumer>
                      {value = <Comp {...value}{...props}/>}  
                    </Consumer>
}