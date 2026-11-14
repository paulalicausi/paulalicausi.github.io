import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import navStyles from './Nav.module.css';
import Home from '../../components/Home/Home.js';
import Experience from '../../components/Experience/Experience.js';
import Projects from '../../components/Projects/Projects.js';
import Contact from '../Contact/Contact.js';
import PixelEffect from '../PixelEffect/PixelEffect.js';
import { translations } from '../../content/translations.js';

function Nav({ language, setLanguage, theme, setTheme }) {
  const location = useLocation();
  const copy = translations[language];
  const isLightTheme = theme === 'light';

  const navItems = [
    { to: '/', label: copy.nav.home, img: '1', component: <Home language={language} /> },
    { to: '/experience', label: copy.nav.journey, img: '2', component: <Experience language={language} /> },
    { to: '/projects', label: copy.nav.projects, img: '3', component: <Projects language={language} /> },
    { to: '/contact', label: copy.nav.contact, img: '4', component: <Contact language={language} /> },
  ];

  return (
    <header>
      <div className={navStyles.controls}>
      <p>controls</p>
      <div className={navStyles.languageToggle}>
        <button
          type="button"
          aria-label={copy.language.switchToSpanish}
          className={language === 'es' ? navStyles.activeLang : ''}
          onClick={() => setLanguage('es')}
        >
          ES
        </button>
        <button
          type="button"
          aria-label={copy.language.switchToEnglish}
          className={language === 'en' ? navStyles.activeLang : ''}
          onClick={() => setLanguage('en')}
        >
          EN
        </button>
      </div>
      <div className={navStyles.themeToggle}>
        <button
          type="button"
          aria-label={copy.theme.switchToDark}
          className={theme === 'dark' ? navStyles.activeTheme : ''}
          onClick={() => setTheme('dark')}
        >
          ☾
        </button>
        <button
          type="button"
          aria-label={copy.theme.switchToLight}
          className={theme === 'light' ? navStyles.activeTheme : ''}
          onClick={() => setTheme('light')}
        >
          ☀
        </button>
      </div>
      </div>
      <nav className={navStyles.nav}>  
        {navItems.map(({ to, label, img }) => (
          <Link key={to} to={to} className={location.pathname === to ? navStyles.active : ''}>
            <img src={`/img/${isLightTheme ? 'light' : 'dark'}/${img}.png`} 
            alt={`${label} planet`} /> {label}
            {location.pathname === to && <small> {copy.nav.youAreHere}</small>}
          </Link>
        ))}
      </nav>

      <div className="bg"></div>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {navItems.map(({ to, component }) => (
            <Route
              key={to}
              path={to}
              element={
                <PixelEffect>
                  {component}
                </PixelEffect>
              }
            />
          ))}
        </Routes>
      </AnimatePresence>
    </header>
  );
}

export default Nav;
