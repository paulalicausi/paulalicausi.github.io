import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/Nav/Nav.js';
import { translations } from './content/translations.js';

function App() {
  const getInitialLanguage = () => {
    if (typeof window === 'undefined') return 'en';
    const storedLanguage = window.localStorage.getItem('language');
    return storedLanguage === 'es' ? 'es' : 'en';
  };

  const getInitialTheme = () => {
    if (typeof window === 'undefined') return 'dark';
    const storedTheme = window.localStorage.getItem('theme');
    return storedTheme === 'light' ? 'light' : 'dark';
  };

  const [language, setLanguage] = useState(getInitialLanguage);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('language', language);
    }
  }, [language]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', theme);
      document.body.dataset.theme = theme;
    }
  }, [theme]);

  return (
    <>
      <Router>
        <Nav language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} />
      </Router>
      <footer>{translations[language].footer}</footer>
    </>
  );
}

export default App;
