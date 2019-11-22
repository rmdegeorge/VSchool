import React from 'react';
import styled from 'styled-components';

import {withData} from './DataProvider';

const BountyForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px auto 0 auto;

  ${props => props.type === "add"
    ?
    `width: 250px;`
    :
    `width: 100%;`
  }

  > h2 {
    text-align: center;
  }
`;

const LivingSelectorContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const TypeSelectorContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      living: true,
      type: "Sith",

    };
  }
  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.props.type === 'add') {
      this.props.addNewBounty(this.state)
    } else {
      this.props.editBounty(this.props.bountyInfo._id, this.state);
      this.props.toggleEdit();
    };
  };
  componentDidMount() {
    if (this.props.type === 'edit'){
      let {first_name, last_name, living, type} = this.props.bountyInfo;
      this.setState({
        first_name: first_name,
        last_name: last_name,
        living: living,
        type: type,
      });
    }

  };
  render() {
    // console.log(this.state);
    return (
      <BountyForm onSubmit={this.handleSubmit} type={this.props.type}>
        {this.props.type !== 'edit' ? <h2>Add New Bounty</h2> : null}
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
                checked={
                  this.props.type === 'add'
                  ?
                  null
                  :
                  this.state.living ? "checked": null}
                />
              Alive
            </label>
            <label>
              <input
                type='radio'
                name='living'
                value={false}
                onChange={this.handleChange}
                checked={
                  this.props.type === 'add'
                  ?
                  null
                  :
                  this.state.living ? null : "checked"}
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
                checked={
                  this.props.type === 'add'
                  ?
                  null
                  :
                  this.state.type === 'Sith' ? "checked": null}
                />
              Sith
            </label>
            <label>
              <input
                type='radio'
                name='type'
                value="Jedi"
                onChange={this.handleChange}
                checked={
                  this.props.type === 'add'
                  ?
                  null
                  :
                  this.state.type === 'Jedi' ? "checked": null}
                />
              Jedi
            </label>
          </TypeSelectorContainer>
          <button type="submit">
            {this.props.type === "edit" ? "Save Changes" : "Add Bounty"}
          </button>
      </BountyForm>
    );
  };
};

export default withData(Form);
