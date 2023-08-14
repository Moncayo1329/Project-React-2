import React from 'react';
import airbnb from '../src/Images/airbnb.png'
import Hero  from './Hero';

import './App.css';



function App() {

  return (
    <div className='foto'>
<img src={airbnb}></img>
   

  <Hero/>
  </div>


  );
}

export default App;
