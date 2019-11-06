import React from 'react';
const {Provider, Consumer} = React.createContext();

class UglyThingsProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      uglyThings: [
        {
          title: "Ugly Thing 1",
          description: "It's an ugly thing",
          imgURL: "https://2itesting.com/media/1154/ugly-baby_blog.jpg"
        },
        {
          title: "Ugly Thing 2",
          description: "It's also an ugly thing",
          imgURL: "https://2itesting.com/media/1154/ugly-baby_blog.jpg"
        },
      ]
    };
  };
  handleSubmit = (e,formState) => {
    e.preventDefault();
    this.setState(prevState => {
      return {uglyThings: [formState, ...prevState.uglyThings]}
    })
  }
  handleSave = (updates, index) => {
    this.setState(prevState => {
      const uglyThingsCopy = [...prevState.uglyThings];
      uglyThingsCopy[index] = updates;
      return {uglyThings: uglyThingsCopy}
    })
  }
  handleDelete = (index) => {
    console.log('you pressed delete')
    this.setState((prevState) => {
      const newUglyThings = prevState.uglyThings.filter((thing, i) => {
        return i !== index;
      });
      return {uglyThings: newUglyThings};
    })
  }
  render() {
    console.log(this.state)
    return(
      <Provider value={{
        ...this.state,
        handleSubmit: this.handleSubmit,
        handleSave: this.handleSave,
        handleDelete: this.handleDelete
      }}>
        {this.props.children}
      </Provider>
    );
  };
};

export default UglyThingsProvider;

export function withProvider(Comp) {
  return props => <Consumer>
                    {value => <Comp {...value}{...props} />}
                  </Consumer>
};