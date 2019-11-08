import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialItems: [],
      items: []
    }
  };

  filterList = (event) => {
    let items = this.state.initialItems;
    items = items.filter((item) => {
      return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: items});
  };

  componentWillMount = () => {
    this.setState({
      initialItems: this.props.content,
      items: this.props.content
    });
  };

  render() {

    const mappedItems = this.state.items.map(function(item) {
      return <div key={item}>{item}</div>
    })
    return (
      <div>
        <form>
          <input type="text" name="search" id="search" placeholder="Search" onChange={this.filterList} />
        </form>
        <div>
          {mappedItems}
        </div>
      </div>
    );
  };
};

export default SearchBar;