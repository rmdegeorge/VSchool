import React, { Component } from 'react';
import vacationlist from './vacationspots.json';
import Vacation from './Vacation';


class VacationContainer extends Component {
  constructor() {
    super();
    this.state = {
      vacations: vacationlist
    }
  }
  changeColor = () => {
    this.setState(prev => {
      return {
        vacations: prev.vacations.map(spot => {
          spot.backgroundColor = 'red';
          return spot;
        })
    }
    })
  }

  render() {
    const mappedVacations = this.state.vacations.map((spot,i) => 
      <Vacation key             = {i+spot.place}
                place           = {spot.place}
                price           = {spot.price}
                time            = {spot.timeToGo} 
                backgroundColor = {spot.backgroundColor}
                changeColor     = {this.changeColor} />)
  return (
      <div className="VacationContainer">
        {mappedVacations}
      </div>
    );
  }
}

export default VacationContainer;
