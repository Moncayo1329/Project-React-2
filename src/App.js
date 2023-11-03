import React from 'react';
import airbnbImage from '../src/Images/airbnb.png';
import Hero from './Hero';
import Card from './card';
import './App.css';

function App() {
  return (
    <div className='foto'>
      <img src={airbnbImage} alt="Airbnb Logo" /> {/* Usar la imagen importada correctamente */}
      <Hero />
      <Card />
    </div>
  );
}

export default App;
