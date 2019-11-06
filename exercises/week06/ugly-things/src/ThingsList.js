import React from 'react';
import Thing from './Thing';
import { withProvider } from './UglyThingsProvider';

class ThingList extends React.Component {
  constructor() {
    super();
  };
  render() {  
    const displayUglyThings = this.props.uglyThings.map((uglyThing, index) => (
      <Thing key={index} index={index} title={uglyThing.title} description={uglyThing.description} imgURL={uglyThing.imgURL} />
    ))
    return (
      <div className="ThingList">
        {displayUglyThings}
      </div>
    )
  }
}

export default withProvider(ThingList);