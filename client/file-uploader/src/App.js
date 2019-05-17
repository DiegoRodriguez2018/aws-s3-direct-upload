import React from 'react';
import './App.css';
import Uploader from './components/Uploader';
import DisplayImage from './components/DisplayImage';

function App() {
  return (
    <div className='App'>
      <Uploader />
      <hr/>
      <DisplayImage />
    </div>
  );
}

export default App;
