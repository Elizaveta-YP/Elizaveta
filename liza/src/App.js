import { useState } from 'react';
import './styles/reset.css';
import './styles/variables.css';
import './styles/index.css';
import './styles/Header.css';
import './styles/AboutMe.css';
import './styles/Skills.css';
import './styles/Accordion.css'; 
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

  const handleSectionClick = (section) => {
  setExpandedSections(prev => {
    const newState = {};
    // Закрываем все секции
    Object.keys(prev).forEach(key => {
      newState[key] = false;
    });
    // Открываем кликнутую секцию
    newState[section] = !prev[section];
    return newState;
  });
};

  return (
    <div className="App">
      <Header onNavClick={handleSectionClick} />
      
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
              {expandedSections.about ? '−' : '+'}
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
              {expandedSections.skills ? '−' : '+'}
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
              {expandedSections.project ? '−' : '+'}
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
              {expandedSections.contact ? '−' : '+'}
            </span>
          </button>
          <div className="accordionContent">
            <Contacts />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
