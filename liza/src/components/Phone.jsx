import '../styles/Phone.css';

const Phone = () => {
  // Создаем фиксированное количество телефонов как в Confetti
  const phones = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 30}s`,
    animationDuration: `${5 + Math.random() * 15}s`,
    size: `${30 + Math.random() * 50}px`,
    opacity: 0.6 + Math.random() * 0.3,
    type: Math.floor(Math.random() * 4),
    rotation: Math.random() * 360,
    sway: Math.random() * 100 - 50,
    phoneColor: `rgba(88, 185, 176, ${0.5 + Math.random() * 0.4})`
  }));

  // Создаем фиксированное количество символов
  const symbols = Array.from({ length: 25 }, (_, i) => ({
    id: `symbol-${i}`,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 20}s`,
    animationDuration: `${5 + Math.random() * 15}s`,
    size: `${15 + Math.random() * 30}px`,
    symbol: ['●', '◆', '■', '▲'][Math.floor(Math.random() * 4)],
    opacity: 0.3 + Math.random() * 0.3
  }));

  return (
    <div className="falling-phones-background">
      {/* Фоновый градиент */}
      <div className="phones-gradient"></div>
      
      {/* Падающие телефоны - БЕСКОНЕЧНАЯ АНИМАЦИЯ */}
      {phones.map(phone => (
        <div
          key={phone.id}
          className={`falling-phone phone-type-${phone.type}`}
          style={{
            left: phone.left,
            width: phone.size,
            height: phone.size,
            animationDelay: phone.animationDelay,
            animationDuration: phone.animationDuration,
            opacity: phone.opacity,
            '--sway': `${phone.sway}px`,
            '--rotation': `${phone.rotation}deg`,
            '--phone-color': phone.phoneColor,
            '--opacity': phone.opacity
          }}
        >
          <div className="phone-body">
            <div className="phone-screen"></div>
            <div className="phone-button"></div>
            <div className="phone-speaker"></div>
          </div>
        </div>
      ))}
      
      {/* Символы связи - БЕСКОНЕЧНАЯ АНИМАЦИЯ */}
      {symbols.map(symbol => (
        <div
          key={symbol.id}
          className="connection-symbol"
          style={{
            left: symbol.left,
            fontSize: symbol.size,
            animationDelay: symbol.animationDelay,
            animationDuration: symbol.animationDuration,
            opacity: symbol.opacity
          }}
        >
          {symbol.symbol}
        </div>
      ))}
    </div>
  );
};

export default Phone;