// components/Stars.jsx
import '../styles/Stars.css';

const Stars = () => {
  // Создаем звезды, которые начинаются выше экрана
  const stars = Array.from({ length: 150 }, (_, i) => {
    const startTop = Math.random() * 100;
    const endTop = 100 + Math.random() * 100;
    const duration = 10 + Math.random() * 20;
    
    return {
      id: i,
      left: `${Math.random() * 100}%`,
      startTop: `-${startTop}px`,
      endTop: `calc(100vh + ${endTop}px)`,
      size: `${Math.random() * 8 + 3}px`,
      delay: `${Math.random() * 20}s`,
      duration: `${duration}s`,
      opacity: 0.3 + Math.random() * 0.7,
      type: Math.floor(Math.random() * 3),
      color: `hsl(${45 + Math.random() * 15}, 100%, ${50 + Math.random() * 30}%)`,
      rotation: Math.random() * 720,
      sway: Math.random() * 50 - 25
    };
  });

  // Большие яркие звезды (тоже падают)
  const bigStars = Array.from({ length: 30 }, (_, i) => {
    const startTop = 50 + Math.random() * 100;
    const endTop = 200 + Math.random() * 200;
    const duration = 15 + Math.random() * 25;
    
    return {
      id: `big-${i}`,
      left: `${Math.random() * 100}%`,
      startTop: `-${startTop}px`,
      endTop: `calc(100vh + ${endTop}px)`,
      size: `${10 + Math.random() * 20}px`,
      delay: `${Math.random() * 5}s`,
      duration: `${duration}s`,
      opacity: 0.4 + Math.random() * 0.6,
      symbol: ['★', '☆', '⭐', '⭐', '⭐', '☆'][Math.floor(Math.random() * 6)],
      rotation: Math.random() * 360
    };
  });

  return (
    <div className="golden-stars-background">
      {/* Фоновый градиент для космоса */}
      <div className="space-gradient"></div>
      
      {/* Маленькие падающие звездочки */}
      {stars.map(star => (
        <div
          key={star.id}
          className={`star star-type-${star.type}`}
          style={{
            left: star.left,
            top: star.startTop,
            width: star.size,
            height: star.size,
            animation: `fall ${star.duration} linear ${star.delay} infinite`,
            opacity: star.opacity,
            backgroundColor: star.color,
            boxShadow: `0 0 ${star.size} ${star.color}`,
            '--start-top': star.startTop,
            '--end-top': star.endTop
          }}
        />
      ))}
      
      {/* Большие падающие звезды */}
      {bigStars.map(star => (
        <div
          key={star.id}
          className="big-star"
          style={{
            left: star.left,
            top: star.startTop,
            fontSize: star.size,
            animation: `fall-rotate ${star.duration} linear ${star.delay} infinite`,
            opacity: star.opacity,
            transform: `rotate(${star.rotation}deg)`,
            '--start-top': star.startTop,
            '--end-top': star.endTop
          }}
        >
          {star.symbol}
        </div>
      ))}
      
      {/* Специальные падающие звезды (метеоры) */}
      {Array.from({ length: 5 }, (_, i) => ({
        id: `meteor-${i}`,
        left: `${Math.random() * 100}%`,
        delay: `${5 + Math.random() * 5}s`,
        duration: `${1 + Math.random() * 2}s`,
        length: `${80 + Math.random() * 100}px`
      })).map(star => (
        <div
          key={star.id}
          className="meteor"
          style={{
            left: star.left,
            animation: `meteor-fall ${star.duration}s ease-out ${star.delay} infinite`
          }}
        />
      ))}
    </div>
  );
};

export default Stars;