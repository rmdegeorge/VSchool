import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import BlogPostContainer from './BlogPostContainer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <BlogPostContainer />
      <Footer />
    </div>
  )
}

export default App;