import React from 'react';
import './styles/App.css';
import Header from './components/header/header.js';
import NavBar from './components/navbar/navbar.js';
import Main from './components/main/main.js';
import Footer from './components/footer/footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
