import React from 'react';
import Weather from './Weather';
import './Weather.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-container">
        <h1>Weather App</h1>
      </header>
      <main>
        <Weather />
      </main>
    </div>
  );
}

export default App;
