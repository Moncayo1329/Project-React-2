import React from 'react';
import airbnbImage from '../src/Images/airbnb.png';
import Hero from './Hero';

import './App.css';

function App() {
  return (
    <div className='foto'>
      <img src={airbnbImage} alt="Airbnb Logo" /> {/* Usar la imagen importada correctamente */}
      <Hero />
    </div>
  );
}

export default App;
