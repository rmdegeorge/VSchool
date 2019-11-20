import React from 'react';
import styled from 'styled-components';

const BountyForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 50px auto 0 auto;
`;

const LivingSelectorContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const TypeSelectorContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;


export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      living: true,
      type: "",

    };
  }
  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(`You Hit the Add Bounty Button!`);
    
  };

  render() {
    console.log(this.state);
    return (
      <BountyForm onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='First Name'
          name='first_name'
          value={this.state.first_name}
          onChange={this.handleChange}
          />
          <input
            type='text'
            placeholder='Last Name'
            name='last_name'
            value={this.state.last_name}
            onChange={this.handleChange}
            />
          <LivingSelectorContainer>
            <label>
              <input
                type='radio'
                name='living'
                value={true}
                onChange={this.handleChange}
                />
              Alive
            </label>
            <label>
              <input
                type='radio'
                name='living'
                value={false}
                onChange={this.handleChange}
                />
              Deceased
            </label>
          </LivingSelectorContainer>
          <TypeSelectorContainer>
            <label>
              <input
                type='radio'
                name='type'
                value="Sith"
                onChange={this.handleChange}
                />
              Sith
            </label>
            <label>
              <input
                type='radio'
                name='type'
                value="Jedi"
                onChange={this.handleChange}
                />
              Jedi
            </label>
          </TypeSelectorContainer>
          <button type="submit">
            Add Bounty
          </button>
      </BountyForm>
    );
  };
};
