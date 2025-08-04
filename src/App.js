import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/Nav/Nav.js'; 
import Game from './components/Game/Game.js';

function App() {
  const [skipGame, setSkipGame] = useState(true);

  return (
    <>
      {skipGame ? (
        <Game onSkip={() => setSkipGame(false)} />
      ) : (
        <>
          <Router>
            <Nav />
          </Router>
          <footer>Made with ☕ + ✨ somewhere in the Alpha Quadrant</footer>
        </>
      )}
    </>
  );
}

export default App;
