import { useState, createContext } from 'react';
import './App.css';
import Parent from './Parent';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <div className='myapp'>
      <ThemeProvider>
        <div className="App">
          <Parent></Parent>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
