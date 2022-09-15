// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Pet from './components/Pet';
import About from './components/About/About';
import Nav from './components/Nav';

// Component should be in Pascal Case
function App() {
  return (
    // This is JSX language , which represent HTML in javascript
    // <Pet />

    // Adding the ABout component
    <div>
      <Nav></Nav>

      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
