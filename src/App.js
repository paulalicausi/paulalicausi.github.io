import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/Nav/Nav.js'; 

function App() {

  return (
        <>
          <Router>
            <Nav />
          </Router>
          <footer>Made with ☕ + ✨ somewhere in the Alpha Quadrant</footer>
        </>
  );
}

export default App;
