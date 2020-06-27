import React from 'react';
import './App.css';
import { Cards, Charts, CountryPicker } from "./components"

function App() {
  return (
    <div className="App">
      <Cards />
      <Charts />
      <CountryPicker />
    </div>
  );
}

export default App;
