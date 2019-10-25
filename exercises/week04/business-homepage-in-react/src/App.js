import React from 'react';

// components
import Header from './components/header/Header.js';
import Body from './components/body/Body.js';
import Footer from './components/footer/Footer.js';

// CSS styles
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
