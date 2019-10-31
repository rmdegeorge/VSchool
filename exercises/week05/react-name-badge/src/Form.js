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
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      placeOfBirth: placeOfBirth.value,
      phone: phone.value,
      favFood: favFood.value,
      about: about.value
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
    /**
     * check each input field for appropriat text input.
     * each field must have at least 3 chars before submit button is enabled.
     * phone number must have correct format (ex. 9991114444) 10 digits with no extra chars. 
     *****> remove all extra chars and spaces
     * 
     */
    const isOnlyDigits = (str) => [...str].every(c => '0123456789'.includes(c));
    const {firstName, lastName, email, placeOfBirth, phone, favFood, about, badges, color} = this.state;
    let submitDisabled = true;
    if (firstName==='' || firstName.length<3) {
      // display reason for submit disabled
      // submitDisabled = true;
    } else if (lastName==='' || lastName.length<3) {
      // display reason for submit disabled
      // submitDisabled = true;
    } else if (email==='' || email.length<3) {
      // display reason for submit disabled
      // submitDisabled = true;
    } else if (placeOfBirth==='' || placeOfBirth.length<3) {
      // display reason for submit disabled
      // submitDisabled = true;
    } else if (phone==='' || !isOnlyDigits(phone)) {
      // display reason for submit disabled
      // submitDisabled = true;
    } else if (favFood==='' || favFood.length<3) {
      // display reason for submit disabled
      // submitDisabled = true;
    } else if (about==='' || about.length<3) {
      // display reason for submit disabled
      // submitDisabled = true;
    } else {
      submitDisabled = false;
    }
    /*
    if (firstName!=='' && firstName.length>=3 && 
        lastName!=='' && lastName.length>=3 && 
        email!=='' && email.length>=3 && 
        placeOfBirth!=='' && placeOfBirth.length>=3 && 
        phone!=='' && isOnlyDigits(phone) &&
        favFood!=='' && favFood.length>=3 && 
        about!=='' && about.length>=3) {
      submitDisabled = false;
    } 
    */
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
          <button className="submit" type="submit" disabled={submitDisabled}>Submit</button>
        </form>

        <NameBadgeContainer badges={this.state.badges}/>  
        
      </div>
    );
  }
}

export default Form;