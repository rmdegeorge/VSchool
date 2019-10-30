import React, {Component} from 'react';
import NameBadgeContainer from './NameBadgeContainer';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      placeOfBirth: '',
      phone: '',
      favFood: '',
      about: '',
      badges: [
        // {
        //   firstName: 'Joe',
        //   lastName: 'Schmoe',
        //   email: 'joeschmoe@bs.net',
        //   placeOfBirth: 'NYC',
        //   phone: '5551239876',
        //   favFood: 'Hot Dogs',
        //   about: 'I\'m super lame'
        // },
        // {
        //   firstName: 'Rob',
        //   lastName: 'DeGeorge',
        //   email: 'rmdegeorge@gmail.com',
        //   placeOfBirth: 'KCMO',
        //   phone: '8165062533',
        //   favFood: 'Tacos',
        //   about: 'I super like tacos!'
        // }
      ]
    };

  }
  handleSubmit = (e) => {
    e.preventDefault();
    let {firstName, lastName, email, placeOfBirth, phone, favFood, about} = e.target;
    const newState = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      placeOfBirth: placeOfBirth,
      phone: phone,
      favFood: favFood,
      about: about
    };
    this.setState(prev => {
      return {
        badges: [...prev.badges, newState]
      }
    })
  }
  handleOnChange = (e) => {
    let {name,value} = e.target
    this.setState({[name]: value})
  }
  render() {
    console.log(this.state.badges)
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="Form">
          <h1 className="formtitle">React Name Badge</h1>
          <input type="text" className="firstName" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleOnChange} />
          <input type="text" className="lastName" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleOnChange} />
          <input type="email" className="email" name="email" placeholder="Email: example@email.com" value={this.state.email} onChange={this.handleOnChange} />
          <input type="text" className="placeOfBirth" name="placeOfBirth" placeholder="Place of Birth" value={this.state.placeOfBirth} onChange={this.handleOnChange} />
          <input type="tel" className="phone" name="phone" placeholder="Phone: 5551234567" value={this.state.phone} onChange={this.handleOnChange} />
          <input type="text" className="favFood" name="favFood" placeholder="Favorite Food" value={this.state.favFood} onChange={this.handleOnChange} />
          <textarea className="about" name="about" placeholder="About" value={this.state.about} onChange={this.handleOnChange} />
          <button className="submit" type="submit">Submit</button>
        </form>

        <NameBadgeContainer badges={this.state.badges}/>  
        
      </div>
    );
  }
}

export default Form;