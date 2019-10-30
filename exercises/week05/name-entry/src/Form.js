import React, {Component} from 'react';
import NamesContainer from './NamesContainer';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      fullName: '', // state here should always have the same name as the name attribut of the corresponding form input
      favSoda: '',
      favAnimal: '',
      favDino: '',
      diet: [],
      names: [] 
    }
  }
  handleChange = (e) => {
    let {name,value} = e.target
    if (name === 'diet') {
      const pArr = [...this.state.diet]
      pArr.includes(value) ? pArr.splice(pArr.indexOf(value), 1) : pArr.push(value);
      this.setState({diet: pArr})
    }else{
      this.setState({[name]: value})
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let {fullName} = this.state;
    this.setState(prev => {
      return {
        names: [...prev.names, fullName]
      }
    })
    
  }
  handleSelect = (e) => {
    // console.log(e.target.name)
    this.setState({[e.target.name]: e.target.value})
  }
  render() {
    console.log(this.state)
    let {diet, names, fullName, favAnimal, favSoda, favDino} = this.state;
    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit}>
          <input  type="name" 
                  placeholder="Full Name" 
                  name="fullName"
                  value={fullName} 
                  onChange={this.handleChange} />
          <button type="submit">Update</button>
          
          <br/><br/>
          Coke<input type="radio" name="favSoda" value="Coke" onChange={this.handleChange} />
          Pepsi<input type="radio" name="favSoda" value="Pepsi" onChange={this.handleChange} />
          RC Cola<input type="radio" name="favSoda" value="RC Cola" onChange={this.handleChange} />
          
          <br/><br/>
          Pick your favorite animal
          <br/>
          <select name='favAnimal' onChange={this.handleChange}>
            <option value="Quokka">Quokka</option>
            <option value="Kiwi Bird">Kiwi Bird</option>
            <option value="Lemming">Lemming</option>
            <option value="Panda">Panda</option>
          </select>
          
          <br/><br/>
          Pick your favorite dinosaur
          <br/>
          <select name='favDino' onChange={this.handleSelect}>
            <option value="brontosaurus">Brunt Of Soar Us</option>
            <option value="trex">Tee Wrecks</option>
            <option value="pteradactyl">Tear A Duck Tall</option>
            <option value="triceratops">Try Sir a Tops</option>
          </select>

          <br/><br/>
          Vegetarian<input type="checkbox" name="diet" value="Vegetarian" onChange={this.handleChange} />
          Vegan<input type="checkbox" name="diet" value="Vegan" onChange={this.handleChange} />
          MEAT<input type="checkbox" name="diet" value="MEAT" onChange={this.handleChange} />

          
        </form>
        <p>Name: {fullName}</p>
        <p>Favorite Animal: {favAnimal}</p>
        <p>Favorite Soda: {favSoda}</p>
        <p>Favorite Dinosaur: {favDino}</p>
        <p>Diet: {diet}</p>
        
        <NamesContainer names={names} />
        
      </div>
    )
  }
}