import React from 'react';
import './App.css';
import { Gal } from './features/gal/Gal';
import Up from './features/gal/Up';

function App() {
  return (
    <div className="App">
        <Up></Up>
        <Gal></Gal>
    </div>
  );
}

export default App;
