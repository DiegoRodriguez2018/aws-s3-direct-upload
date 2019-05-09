import React from 'react';
import logo from './logo.svg';
import './App.css';
import Uploader from './components/Uploader';
import DisplayImage from './components/DisplayImage';

function App() {
  return (
    <div className='App'>
      <Uploader />

      <DisplayImage />
    </div>
  );
}

export default App;
