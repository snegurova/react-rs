import React from 'react';
import './App.css';
import img from './blog-article-image.jpeg';

const App = () => {
  return(
    <div>
      <h1>React Components!</h1>
      <img src={img} alt=""/>
    </div>
  )
}

export default App;