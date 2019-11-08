import React, { Component } from 'react';

import '../AutoCompleteText.css';

class AutoCompleteText extends Component {
  constructor(props) {
    super(props)
    this.state = {
      suggestions: [],
      text: '',
    }
  }

  onTextChanged = (event) => {
    const {items} = this.props
    const value = event.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = items.sort().filter(value => regex.test(value));
    }
    this.setState(() => ({suggestions, text: value}));
  }

  renderSuggestions() {
    const {suggestions} = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <div classname="suggestions-list">
        {suggestions.map((item) => <div className="suggestion" onClick={() => this.suggestionSelected(item)}>{item}</div>
        )}
      </div>
    )

  }

  suggestionSelected = (value) => (
    this.setState(() => ({
      text: value,
      suggestions: [],
    }))
  )

  render() {
    const {text} = this.state;
    return (
      <div className="autocompletetext">
        <input value={text} onChange={this.onTextChanged} type="text" name="search" />
        {this.renderSuggestions()}
      </div>
    );
  }
}

export default AutoCompleteText;