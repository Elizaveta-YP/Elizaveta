import { useState } from 'react';
import html from '../images/html.png';
import css from '../images/css.png';
import javascript from '../images/javascript.png';
import react from '../images/react.png';
import typescript from '../images/typescript.png';
import github from '../images/github.png';
import adaptability from '../images/adaptability.png';
import creativeThinking from '../images/creativeThinking.png';
import selfOrganization from '../images/selfOrganization.png';
import responsibility from '../images/responsibility.png';

import Snowflakes from '../components/Snowflakes';

const Skills = () => {
    const [activeTab, setActiveTab] = useState('hard');
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const [selectedSkill, setSelectedSkill] = useState(null);

    const hardSkillsButtons = [
        { id: 'html', src: html, alt: 'HTML5', name: 'HTML5'},
        { id: 'css', src: css, alt: 'CSS3', name: 'CSS3'},
        { id: 'js', src: javascript, alt: 'JavaScript', name: 'JavaScript'},
        { id: 'react', src: react, alt: 'React', name: 'React'},
        { id: 'ts', src: typescript, alt: 'TypeScript', name: 'TypeScript'},
        { id: 'git', src: github, alt: 'GitHub', name: 'Git/GitHub'}
    ];

    const softSkillsButtons = [
    { id: 'adaptability', name: 'Адаптивность', img: <img src={adaptability} alt='Адаптивность' />},
        { id: 'creativity', name: 'Креативное мышление', img: <img src={creativeThinking} alt='Креативное мышление' />},
        { id: 'organization', name: 'Самоорганизация', img: <img src={selfOrganization} alt='Самоорганизация' />},
        { id: 'responsibility', name: 'Ответственность', img: <img src={responsibility} alt='Ответственность' />}
    ];

    const skillsData = {
        hard: {
            title: 'Hard Skills',
            description: selectedSkill ? 
                `${selectedSkill.name}: ${selectedSkill.description}` : 
                'Технологии, которыми я владею',
            buttons: hardSkillsButtons
        },
        soft: {
            title: 'Soft Skills',
            description: selectedSkill ? 
                `${selectedSkill.name}: ${selectedSkill.description}` : 
                'Навыки, которыми я владею',
            buttons: softSkillsButtons
        }
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setSelectedSkill(null); 
        if (isInitialLoad) {
            setIsInitialLoad(false);
        }
    };

    const currentTab = skillsData[activeTab];

    return (
        <div className="skillsSection" style={{ position: 'relative', overflow: 'hidden' }}>
      <Snowflakes />
            <h3 className="titleSkills">Навыки и умения</h3>
            
            <div className="skillsTabs">
                <button 
                    className={`skillsTab ${activeTab === 'hard' ? 'active' : ''}`}
                    onClick={() => handleTabClick('hard')}
                >
                    Hard Skills
                    <span className="tabIndicator"></span>
                </button>
                <button 
                    className={`skillsTab ${activeTab === 'soft' ? 'active' : ''}`}
                    onClick={() => handleTabClick('soft')}
                >
                    Soft Skills
                    <span className="tabIndicator"></span>
                </button>
            </div>

            {!isInitialLoad && (
                <div className="skillsContent">
        
                    <div className="skillsContentInner">
                        <div className="skillsHeader">
                            <h3 className="skillsTitle">
                                {currentTab.title}
                            </h3>
                            <p className="skillsDescription">
                                {currentTab.description}
                            </p>
                        </div>
                        
                            <div className="skillsGrid">
                                {activeTab === 'hard' ? (
                                    hardSkillsButtons.map((skill, index) => (
                                        <div 
                                            key={skill.id}
                                            className="skillItem"
                                            style={{ animationDelay: `${index * 0.1}s` }}
                                        >
                                            <img 
                                                src={skill.src} 
                                                alt={skill.alt}
                                                className="skillGridIcon"
                                            />
                                            <span className="skillName">{skill.name}</span>
                                        </div>
                                    ))
                                ) : (
                                    softSkillsButtons.map((skill, index) => (
                                        <div 
                                            key={skill.id}
                                            className="skillItem softSkillItem"
                                            style={{ animationDelay: `${index * 0.1}s` }}
                                        >
                                            <span className="skillImg">{skill.img}</span>
                                            <span className="skillName">{skill.name}</span>
                                        </div>
                                    ))
                                )}
                            </div>
                       
                    </div>
                </div>
            )}
        </div>
    );
};

export default Skills;