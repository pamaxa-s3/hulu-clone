import React from 'react';
import './App.css';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Results from './Results/Results';
import { useState } from 'react';
import requests from './utilites/requests';

function App() {

  const [selectedOption, setSelecderOption] = useState(requests.fetchTrending);

  return (
    <div className="App">
      <Header />
      <Nav setSelecderOption={setSelecderOption} />
      <Results selectedOption={selectedOption}/>
    </div>
  );
}

export default App;
