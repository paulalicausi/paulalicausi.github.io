import { useRef, useEffect, useState } from 'react';
import gameStyles from './Game.module.css';
import planet1 from '../../assets/img/1.png';
import planet2 from '../../assets/img/2.png';
import planet3 from '../../assets/img/3.png';
import planetEarth from '../../assets/img/4.png';
import planet5 from '../../assets/img/5.png';
import shipImg from '../../assets/img/ship.png';
import bg from '../../assets/img/bg.png';

const Game = ({ onSkip }) => {
  const canvasRef = useRef(null);
  const [gameWon, setGameWon] = useState(false);
  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight * 0.6,
  });

  // ✅ Función para ubicar planetas según tamaño del canvas
  const getResponsivePlanets = (width, height) => {
    return [
      { key: 'planet1', x: width * 0.08, y: height * 0.15 },
      { key: 'planet2', x: width * 0.75, y: height * 0.25 },
      { key: 'planet3', x: width * 0.25, y: height * 0.65 },
      { key: 'planetEarth', x: width * 0.78, y: height * 0.7 },
      { key: 'planet5', x: width * 0.45, y: height * 0.5 },
    ];
  };

  useEffect(() => {
    const handleResize = () => {
      setCanvasSize({
        width: window.innerWidth,
        height: window.innerHeight * 0.6,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (gameWon) {
      const timer = setTimeout(() => {
        if (typeof onSkip === 'function') onSkip();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [gameWon, onSkip]);

  const imagePaths = {
    planet1,
    planet2,
    planet3,
    planetEarth,
    planet5,
    ship: shipImg,
    bg,
  };

  const ship = {
    key: 'ship',
    x: 50,
    y: 10,
    width: 40,
    height: 40,
    speed: 3,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const keys = {};
    let animationId;
    let frame = 0;

    let planets = getResponsivePlanets(canvasSize.width, canvasSize.height);

    const loadedImages = {};
    const sparks = [];
    let lastSparkTime = 0;
    const sparkCooldown = 500;

    const loadImages = () => {
      const promises = Object.entries(imagePaths).map(([key, src]) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            loadedImages[key] = img;
            resolve();
          };
        });
      });
      return Promise.all(promises);
    };

    const moveShip = () => {
      if (keys.ArrowUp) ship.y -= ship.speed;
      if (keys.ArrowDown) ship.y += ship.speed;
      if (keys.ArrowLeft) ship.x -= ship.speed;
      if (keys.ArrowRight) ship.x += ship.speed;

      ship.x = Math.max(0, Math.min(ship.x, canvas.width - ship.width));
      ship.y = Math.max(0, Math.min(ship.y, canvas.height - ship.height));
    };

    const createSparks = (x, y) => {
      for (let i = 0; i < 15; i++) {
        sparks.push({
          x: x + 30,
          y: y + 30,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4,
          life: 30 + Math.random() * 30,
          size: 2 + Math.random() * 2,
          alpha: 1,
        });
      }
    };

    const updateSparks = () => {
      for (let i = sparks.length - 1; i >= 0; i--) {
        const p = sparks[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life--;
        p.alpha = p.life / 60;
        if (p.life <= 0) sparks.splice(i, 1);
      }
    };

    const drawSparks = () => {
      sparks.forEach((p) => {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = 'tomato';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
    };

    const checkCollision = (a, b) => {
      return (
        a.x < b.x + 60 &&
        a.x + ship.width > b.x &&
        a.y < b.y + 60 &&
        a.y + ship.height > b.y
      );
    };

    const animate = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      planets.forEach((planet, i) => {
        const offset = Math.sin(frame / 30 + i) * 2;
        const y = planet.y + offset;
        ctx.drawImage(loadedImages[planet.key], planet.x, y, 60, 60);
        planet._currentY = y;
      });

      moveShip();
      ctx.drawImage(loadedImages[ship.key], ship.x, ship.y, ship.width, ship.height);

      let collidedPlanet = null;
      for (const planet of planets) {
        if (checkCollision(ship, { x: planet.x, y: planet._currentY || planet.y })) {
          collidedPlanet = planet;
          break;
        }
      }

      const now = Date.now();

      if (collidedPlanet) {
        if (collidedPlanet.key === 'planetEarth') {
          setGameWon(true);
          return;
        } else {
          if (now - lastSparkTime > sparkCooldown) {
            createSparks(collidedPlanet.x, collidedPlanet._currentY || collidedPlanet.y);
            lastSparkTime = now;
          }
        }
      }

      updateSparks();
      drawSparks();

      animationId = requestAnimationFrame(animate);
    };

    const handleKeyDown = (e) => {
      keys[e.key] = true;
    };

    const handleKeyUp = (e) => {
      keys[e.key] = false;
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      const touchX = touch.clientX - rect.left;
      const touchY = touch.clientY - rect.top;

      ship.x = touchX - ship.width / 2;
      ship.y = touchY - ship.height / 2;
    };

    const start = async () => {
      await loadImages();
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
      canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
      animate();
    };

    start();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      canvas.removeEventListener('touchmove', handleTouchMove);
    };
  }, [canvasSize]);

  return (
    <div className={gameStyles.game} style={{ textAlign: 'center' }}>
      <div className="bg"></div>
      <p className={gameStyles.gameFont}>
        Hi, traveler.
        <br />
        Hurry up — <span>let's meet on planet Earth</span>! 🚀
      </p>
      <p className={gameStyles.instructions}>PRESS KEYS OR TAP TO PILOT THE SHIP</p>
      <canvas
        ref={canvasRef}
        width={canvasSize.width}
        height={canvasSize.height}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      {gameWon && (
        <p className={`${gameStyles.gameFont} ${gameStyles.welcome}`}>
          Nice to meet you, welcome {':)'}
        </p>
      )}
      <button className={gameStyles.skipGame} onClick={onSkip}>
        [Skip]
      </button>
    </div>
  );
};

export default Game;
