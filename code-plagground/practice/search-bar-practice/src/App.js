import React from 'react';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  render() {
    const countries = [
      "Afghanistan",
      "Aland Islands",
      "Albania",
      "Algeria",
      "Germany",
      "United States"
    ];

    return (
      <div className="App">
        <SearchBar content={countries} />
      </div>
    );
  };
}

export default App;
