import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import navStyles from './Nav.module.css';
import Home from '../../components/Home/Home.js';
import Experience from '../../components/Experience/Experience.js';
import Education from '../../components/Education/Education.js';
import Projects from '../../components/Projects/Projects.js';
import Contact from '../Contact/Contact.js';
import PixelEffect from '../PixelEffect/PixelEffect.js';
import planetExperience from '../../assets/img/3.png';
import planetEducation from '../../assets/img/1.png';
import planetProjects from '../../assets/img/2.png';
import planetHome from '../../assets/img/4.png';
import planetContact from '../../assets/img/5.png';

function Nav() {
  const location = useLocation();

  const navItems = [
    { to: '/', label: 'Home', img: planetHome, component: <Home /> },
    { to: '/experience', label: 'Experience', img: planetExperience, component: <Experience /> },
    { to: '/education', label: 'Education', img: planetEducation, component: <Education /> },
    { to: '/projects', label: 'Projects', img: planetProjects, component: <Projects /> },
    { to: '/contact', label: 'Work together', img: planetContact, component: <Contact /> },
  ];

  return (
    <header>
      <nav className={navStyles.nav}>
        {navItems.map(({ to, label, img }) => (
          <Link key={to} to={to} className={location.pathname === to ? navStyles.active : ''}>
            <img src={img} alt={`${label} planet`} /> {label}
            {location.pathname === to && <small> You are here</small>}
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
