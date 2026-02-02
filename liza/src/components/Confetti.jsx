// components/CSSConfetti.jsx
import '../styles/Confetti.css';

const Confetti = () => {
  // Создаем 80 частиц конфетти
  const particles = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 20}s`,
    animationDuration: `${15 + Math.random() * 15}s`,
    size: `${Math.random() * 10 + 5}px`,
    color: `hsl(${Math.random() * 360}, 100%, 65%)`,
    shape: Math.floor(Math.random() * 3)
  }));

  return (
    <div className="css-confetti">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="confetti-particle"
          style={{
            left: particle.left,
            animationDelay: particle.animationDelay,
            animationDuration: particle.animationDuration,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            borderRadius: particle.shape === 0 ? '50%' : particle.shape === 1 ? '0' : '50% 50% 0 50%',
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;