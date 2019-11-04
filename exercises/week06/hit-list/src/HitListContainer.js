import React, { Component } from 'react';
import Axios from 'axios';

import HitListItem from './HitListItem';

class HitListContainer extends Component {
  constructor() {
    super();
    this.state = {
      hitList: []
    };
  };

  componentDidMount() {
    Axios.get('https://s3.amazonaws.com/v-school/data/hitlist.json').then(response => {
      console.log(response);
      this.setState({hitList: response.data});
    }).catch(error => {
      console.log(error)
    });

  };
  render() {
    console.log(this.state.hitList)
    const displayHitList = this.state.hitList.map((item,i) => {
      return (
        <HitListItem imgURL={item.image} name={item.name} key={item.name + i} />
      )
    })
    return (
      <div className='HitListContainer'>
        {displayHitList}
      </div>
    );
  };
}

export default HitListContainer;