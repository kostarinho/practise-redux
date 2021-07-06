import React from 'react';
import logo from './logo.svg';
import { Random } from './components/randomGifs/index';
import { Loader } from './features/gifloader/Loader';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <Loader/>

      
      </header>
    </div>
  );
}

export default App;
