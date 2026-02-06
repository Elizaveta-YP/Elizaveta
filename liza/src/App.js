import { useState, useEffect, useRef } from 'react';
import './styles/App.css'; 
import './styles/reset.css';
import './styles/variables.css';
import './styles/index.css';
import './styles/Header.css';
import './styles/AboutMe.css';
import './styles/Skills.css';
import './styles/Accordion.css'; 
import laptop from './images/laptop.png';
import whiteLaptop from './images/whiteLaptop.png';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';

function App() {
  const [expandedSections, setExpandedSections] = useState({
    about: false,   
    skills: false,
    project: false,
    contact: false
  });

  const [isWhiteLaptop, setIsWhiteLaptop] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false); 
  const laptopRef = useRef(null);
  const handleSectionClick = (section) => {
    setExpandedSections(prev => {
      const newState = { ...prev };
      
      newState[section] = !prev[section];
      
      if (newState[section]) {
        Object.keys(newState).forEach(key => {
          if (key !== section) {
            newState[key] = false;
          }
        });
      }
      
      return newState;
    });
  };

  const handleLaptopClick = () => {
    if (isAnimating) return; 
    
    setIsAnimating(true);
    
    setIsWhiteLaptop(!isWhiteLaptop);
  
    if (laptopRef.current) {
      const currentTransform = laptopRef.current.style.transform;
      laptopRef.current.style.transform = currentTransform + ' scale(0.8)';
      laptopRef.current.style.opacity = '0.7';

      if (!isWhiteLaptop) {
        laptopRef.current.style.boxShadow = `
          0 0 0 20px rgba(88, 185, 176, 0.9),
          0 0 0 40px rgba(88, 185, 176, 0.6),
          0 0 0 60px rgba(88, 185, 176, 0.3)
        `;
      } else {
        laptopRef.current.style.boxShadow = `
          0 0 0 20px rgba(255, 255, 255, 0.9),
          0 0 0 40px rgba(255, 255, 255, 0.6),
          0 0 0 60px rgba(255, 255, 255, 0.3)
        `;
      }

      setTimeout(() => {
        if (laptopRef.current) {
          laptopRef.current.style.transform = currentTransform;
          laptopRef.current.style.opacity = '1';

          setTimeout(() => {
            if (laptopRef.current) {
              const event = new Event('scroll');
              window.dispatchEvent(event);
              setIsAnimating(false); 
            }
          }, 200);
        }
      }, 300);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!laptopRef.current || isAnimating) return; 
      
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const scrollProgress = Math.min(scrollPosition / (documentHeight - windowHeight), 1);
      
      const maxRotation = 360;
      const maxVerticalMovement = 400;
      const maxHorizontalMovement = 100;
      const startScale = 1;
      const endScale = 0.7;
      
      const rotation = scrollProgress * maxRotation;
      const verticalMovement = scrollProgress * maxVerticalMovement;
      const horizontalMovement = scrollProgress * maxHorizontalMovement;
      const scale = startScale + (endScale - startScale) * scrollProgress;
   
      const outlineIntensity = Math.max(0, (scrollProgress - 0.7) / 0.3);
      
      laptopRef.current.style.transform = `
        translate(calc(-50% + ${horizontalMovement}px), calc(-50% + ${verticalMovement}px))
        rotate(${rotation}deg)
        scale(${scale})
      `;
      
      if (!isAnimating) {
        if (isWhiteLaptop) {
          laptopRef.current.style.boxShadow = `
            0 0 0 ${outlineIntensity * 20}px rgba(166, 229, 224, 0.5),
            0 0 ${outlineIntensity * 30}px ${outlineIntensity * 40}px rgba(166, 229, 224, 0.3),
            0 0 ${outlineIntensity * 40}px ${outlineIntensity * 50}px rgba(166, 229, 224, 0.1)
          `;
          
          laptopRef.current.style.outline = `${outlineIntensity * 3}px solid rgba(255, 255, 255, 0.8)`;
          laptopRef.current.style.outlineOffset = `${outlineIntensity * 5}px`;
        } else {
          laptopRef.current.style.boxShadow = `
            0 0 0 ${outlineIntensity * 20}px rgba(88, 185, 176, 0.3),
            0 0 ${outlineIntensity * 30}px ${outlineIntensity * 40}px rgba(88, 185, 176, 0.2),
            0 0 ${outlineIntensity * 40}px ${outlineIntensity * 50}px rgba(88, 185, 176, 0.1)
          `;
          laptopRef.current.style.outline = 'none';
        }
      }
      
      laptopRef.current.style.opacity = 1;
      
      if (scrollProgress > 0.7) {
        laptopRef.current.style.zIndex = '1';
      } else {
        laptopRef.current.style.zIndex = '10';
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isWhiteLaptop, isAnimating]); 

  return (
    <div className="App">

      <Header onNavClick={handleSectionClick} />
      
      <div className="main-content">
        <div className="accordion-container">
          <div className="accordion">
            {/* Обо мне */}
            <div className={`accordionSection ${expandedSections.about ? 'expanded' : ''}`}>
              <button 
                className="accordionHeader" 
                onClick={() => handleSectionClick('about')}
                aria-expanded={expandedSections.about}
              >
                <h2 className="accordionTitle">Обо мне</h2>
                <span className="accordionIcon">
                  {expandedSections.about ? '↓' : '↓'}
                </span>
              </button>
              <div className="accordionContent">
                <AboutMe />
              </div>
            </div>

            {/* Ключевые навыки */}
            <div className={`accordionSection ${expandedSections.skills ? 'expanded' : ''}`}>
              <button 
                className="accordionHeader" 
                onClick={() => handleSectionClick('skills')}
                aria-expanded={expandedSections.skills}
              >
                <h2 className="accordionTitle">Ключевые навыки</h2>
                <span className="accordionIcon">
                  {expandedSections.skills ? '↓' : '↓'}
                </span>
              </button>
              <div className="accordionContent">
                <Skills />
              </div>
            </div>

            {/* Проекты */}
            <div className={`accordionSection ${expandedSections.project ? 'expanded' : ''}`}>
              <button 
                className="accordionHeader" 
                onClick={() => handleSectionClick('project')}
                aria-expanded={expandedSections.project}
              >
                <h2 className="accordionTitle">Проекты</h2>
                <span className="accordionIcon">
                  {expandedSections.project ? '↓' : '↓'}
                </span>
              </button>
              <div className="accordionContent">
                <Portfolio />
              </div>
            </div>

            {/* Контакты */}
            <div className={`accordionSection ${expandedSections.contact ? 'expanded' : ''}`}>
              <button 
                className="accordionHeader" 
                onClick={() => handleSectionClick('contact')}
                aria-expanded={expandedSections.contact}
              >
                <h2 className="accordionTitle">Контакты</h2>
                <span className="accordionIcon">
                  {expandedSections.contact ? '↓' : '↓'}
                </span>
              </button>
              <div className="accordionContent">
                <Contacts />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <img 
        ref={laptopRef}
        src={isWhiteLaptop ? whiteLaptop : laptop} 
        alt={isWhiteLaptop ? "Белый ноутбук" : "Ноутбук"} 
        className={`laptop-image ${isAnimating ? 'animating' : ''}`}
        onClick={handleLaptopClick}
        title={isWhiteLaptop ? "Нажмите для обычного ноутбука" : "Нажмите для белого ноутбука"}
        style={{ 
          cursor: isAnimating ? 'default' : 'pointer',
          transition: 'box-shadow 0.3s ease, outline 0.3s ease, transform 0.3s ease, opacity 0.3s ease'
        }}
      />
      
      <Footer onNavClick={handleSectionClick} />
    </div>
  );
}

export default App;