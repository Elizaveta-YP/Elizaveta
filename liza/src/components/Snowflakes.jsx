import '../styles/Snowflakes.css';

const Snowflakes = () => {
  const snowflakes = Array.from({ length: 50 }, (_, i) => i + 1);

  return (
    <div className="snowflakes" aria-hidden="true">
      {snowflakes.map(i => (
        <div 
          key={i}
          className="snowflake"
          style={{
            left: `${(i * 2) % 100}%`,
            animationDuration: `${10 + (i % 20)}s`,
            animationDelay: `${i * 0.1}s`,
            opacity: 0.3 + Math.random() * 0.5,
            fontSize: `${20 + Math.random() * 30}px`
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
};

export default Snowflakes;